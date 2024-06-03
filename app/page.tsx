// import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowDown } from "lucide-react";
// import mainBg from "../assets/main-bg.jpg";

export default function Home() {
  return (
    <main className="">
      <div className="main h-[100vh] bg-transparent flex flex-col justify-center items-center gap-y-8 relative">
        <h1 className="text-6xl font-bold text-white">Dani</h1>

        <Input
          type="text"
          placeholder="search"
          className="max-w-[60%] rounded-full p-6 border border-white bg-white"
        />
        <h1 className="text-xl text-white text-center max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          laborum neque.
        </h1>
        <p className="absolute bottom-5 right-1/2 translate-x-1/2 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-white/70">
          <ArrowDown className="text-green-700 font-bold" />
        </p>
      </div>
      <div className="h-[100vh] bg-black"></div>
    </main>
  );
}
