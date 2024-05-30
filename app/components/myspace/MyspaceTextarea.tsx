"use client";

import { useState } from "react";

export default function MyspaceTextarea() {
  const [inputValue, setInputValue] = useState("");
  const [conversation, setConversation] = useState(["Add Comment"]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
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
      <input
        className="w-full"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message.. (this will create AI replies eg: Omg totally!)"
      />
    </div>
  );
}
