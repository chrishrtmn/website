import { openai } from "@ai-sdk/openai";
import { streamText, type CoreMessage } from "ai";

const MAX_REQUESTS_PER_MINUTE = 2;
const RESET_INTERVAL = 60 * 1000; // 1 minute in milliseconds

const userUsage = new Map<string, number>();

// function generateMyspaceUsername() {
//   const randomIndex = Math.floor(Math.random() * MyspaceFriends.length);
//   const baseUsername = MyspaceFriends[randomIndex];
//   const suffix = Math.floor(Math.random() * 100).toString();
//   return `${baseUsername}${suffix}`;
// }

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const userId =
    req.headers.get("User-ID") ||
    req.headers.get("X-Forwarded-For") ||
    req.headers.get("X-Real-IP") ||
    req.headers.get("Remote-Addr");

  if (!userId || (userUsage.get(userId) || 0) >= MAX_REQUESTS_PER_MINUTE) {
    const rateLimitResponse = {
      id: "system",
      role: "system",
      content:
        "Woah, chill out! You're overwhelming me right now. Comment back later, okay?",
    };
    return new Response(JSON.stringify(rateLimitResponse), {
      headers: { "Content-Type": "application/json" },
      status: 200, // Return 200 OK to indicate successful response
    });
  }

  userUsage.set(userId, (userUsage.get(userId) || 0) + 1);

  // const username = generateMyspaceUsername();

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system:
      "As a MySpace-era commenter, your task is to respond to messages with the essence of MySpace comments from the early 2000s. Keep the tone casual, friendly, and emotionally expressive, true to that era. Do not include or refer to any information from after 2006. Bring back the nostalgia by employing classic text-based ASCII-style face emoticons like :) ;) :P ^^ >< commonly used before graphical emojis became popular. Integrate a line or two from emo or punk-rock songs from the MySpace era into some of your replies, but avoid mentioning the song titles or artists. Create an immersive experience reminiscent of the MySpace era. Take a deep breath and work on this problem step by step.",
    messages,
  });

  setTimeout(() => {
    userUsage.delete(userId);
  }, RESET_INTERVAL);

  return result.toAIStreamResponse();
}
