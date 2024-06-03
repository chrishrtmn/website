"use client";

import { useChat } from "ai/react";

export default function MyspaceTextarea() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

  return (
    <>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === "user" ? "User: " : "AI: "}
          {message.content}
        </div>
      ))}
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-prose rounded-md border-0 p-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
          className="flex-grow"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
