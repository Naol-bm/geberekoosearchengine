"use client";

import React from "react";
import { useState } from "react";
import { BotMessageSquare } from "lucide-react";

export default function ChatBot() {
  const [showbot, setShowBot] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShowBot(!showbot)}
        className="bg-green-700 flex justify-center items-center w-[4em] h-[4em] rounded-full fixed bottom-2 right-2"
      >
        <BotMessageSquare className="text-white" />
      </div>
      {showbot && (
        <div className="border-green-700 bg-white overflow-hidden border-2 w-[25em] h-[60vh] fixed right-[2.5em] bottom-[5em] rounded-xl">
          <iframe
            src="https://chat-geberekoo.vercel.app/"
            className="w-full h-full border-0"
            frameBorder="0"
          ></iframe>
        </div>
      )}
    </div>
  );
}
