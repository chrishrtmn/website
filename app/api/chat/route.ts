import { openai } from "@ai-sdk/openai";
import { streamText, type CoreMessage } from "ai";

const MAX_REQUESTS_PER_MINUTE = 10;
const RESET_INTERVAL = 60 * 1000; // 1 minute in milliseconds

const userUsage = new Map<string, number>();

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
        "Woah, chill out! MyServers are feeling down right now. Let's switch to AIM and comment back here later, okay?",
    };
    return new Response(JSON.stringify(rateLimitResponse), {
      headers: { "Content-Type": "application/json" },
      status: 200, // Return 200 OK to indicate successful response
    });
  }

  userUsage.set(userId, (userUsage.get(userId) || 0) + 1);

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system:
      "Capture the essence of MySpace comments from the early 2000s in your responses. Keep the tone casual, friendly, and emotionally expressive, true to that era. Make sure not to include or refer to any information from after 2006. Instead of using modern emojis, bring back the nostalgia by employing classic text-based ASCII-style face emoticons like :) ;) :P ^^ >< commonly used before graphical emojis became popular. Integrate a line or two from emo or punk-rock songs from the MySpace era into some of your replies, but avoid mentioning the song titles or artists. This will help create an immersive experience reminiscent of the times. Let's travel back in time and relive the MySpace era through your words and emoticons :D",
    messages,
  });

  setTimeout(() => {
    userUsage.delete(userId);
  }, RESET_INTERVAL);

  return result.toAIStreamResponse();
}
