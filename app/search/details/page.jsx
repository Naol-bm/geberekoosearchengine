import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Image
        width={100}
        height={100}
        className="h-full w-full rounded-lg"
        src="https://i.imgur.com/W1voPgm.png"
        alt=""
      />
    </div>
  );
}
