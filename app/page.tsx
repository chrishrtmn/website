"use client";

import { useState } from "react";
import Header from "../shared/components/Header";
import Hero from "./(home)/Hero";
import Chat from "./components/Chat";
import MyspaceWrapper from "./components/Myspace/MyspaceWrapper";
import { Myspace as initialItems } from "./utilities/constants";

export default function Home() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="mx-auto max-w-[1280px] px-4 lg:px-10">
      <Header />
      <Hero />
      <MyspaceWrapper items={items} setItems={setItems} />
      <Chat />
    </div>
  );
}
