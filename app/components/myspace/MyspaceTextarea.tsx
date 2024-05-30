"use client";

import { useState } from "react";

export default function MyspaceTextarea() {
  const [inputValue, setInputValue] = useState("");
  const [conversation, setConversation] = useState(["Comments"]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter") {
      try {
        setConversation((prevConvo) => [...prevConvo, inputValue]);
        setInputValue("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="mx-auto w-full">
      {conversation.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <label
        htmlFor="myspace-comment"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add Comment
      </label>
      <textarea
        aria-label="Type a message"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id="myspace-comment"
        name="myspace-comment"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message.. (this will create AI replies eg: Omg totally!)"
      />
    </div>
  );
}
