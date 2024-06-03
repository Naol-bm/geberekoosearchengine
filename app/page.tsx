// import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Mouse, ChevronsDown } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import farmOne from "../assets/farm-1-img.jpg";
import drone from "../assets/drone-img.jpg";
import sensors from "../assets/sensors-img.jpg";
import weather from "../assets/weather.jpg";
import iot from "../assets/iot.jpg";
import arable from "../assets/arable.webp";
import ai from "../assets/ai.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="main h-[100vh] bg-transparent flex flex-col justify-center items-center gap-y-10 relative">
        <h1 className="text-8xl font-bold text-white">Dani</h1>

        <Input
          type="text"
          placeholder="search"
          className="max-w-[60%] rounded-full p-6 border border-white bg-white"
        />
        <h1 className="text-xl text-white text-center max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          laborum neque.
        </h1>
        <a
          href={"#about"}
          className="absolute bottom-3 gap-y-2 right-1/2 translate-x-1/2 cursor-pointer flex flex-col justify-center items-center"
        >
          <Mouse className="text-white" />
          <h1 className="text-xs text-white text-center">
            Scroll down to view all
          </h1>
          <ChevronsDown className="text-white" />
        </a>
      </div>
      <div className="h-[70vh] bg-slate-400 flex" id="about">
        <Image src={farmOne} alt="farm" className="w-[50%]" />
        <div className="w-[50%] bg-white/80 flex flex-col gap-y-4 items-center justify-center">
          <h1 className="text-2xl font-bold text-black/90 text-center">
            About Dani AI Climate Smart Solution
          </h1>
          <h1 className="text-sm max-w-[70%] font-bold text-black/90 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            deleniti adipisci deserunt nostrum nihil impedit blanditiis odit
            consequuntur at alias harum veritatis, praesentium, facere, officiis
            incidunt minus aut sit. Omnis!
          </h1>
          <h1 className="text-sm max-w-[70%] font-bold text-black/90 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            deleniti adipisci deserunt nostrum nihil impedit blanditiis odit
            consequuntur at alias harum veritatis, praesentium, facere, officiis
            incidunt minus aut sit. Omnis!
          </h1>
          <Link
            href="#"
            className="py-2 px-4 rounded-2xl bg-green-700 text-white"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="p-24 flex flex-col gap-y-24 bg-[#304f30]">
        <div className="flex gap-x-8 items-center">
          <div className="flex flex-col gap-y-4 w-[50%]">
            <h1 className="text-3xl font-bold text-white ">Drone utilized</h1>
            <h1 className="text-base max-w-[70%] text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              deleniti adipisci deserunt nostrum nihil impedit blanditiis odit
              consequuntur at alias harum veritatis, praesentium, facere,
              officiis incidunt minus aut sit. Omnis!
            </h1>
            <Link
              href="#"
              className="py-2 px-4 text-sm rounded-full bg-yellow-600 text-white self-start"
            >
              Learn more
            </Link>
          </div>
          <div className="border-4 border-white w-[50%] rounded-2xl overflow-hidden">
            <Image src={drone} alt="drone" />
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          <div className="border-4 border-white w-[50%] rounded-2xl overflow-hidden">
            <Image src={ai} alt="ai" />
          </div>
          <div className="flex flex-col gap-y-4 w-[50%]">
            <h1 className="text-3xl font-bold text-white ">AI utilized</h1>
            <h1 className="text-base max-w-[70%] text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              deleniti adipisci deserunt nostrum nihil impedit blanditiis odit
              consequuntur at alias harum veritatis, praesentium, facere,
              officiis incidunt minus aut sit. Omnis!
            </h1>
            <Link
              href="#"
              className="py-2 px-4 text-sm rounded-full bg-yellow-600 text-white self-start"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex gap-x-8 items-center">
          <div className="flex flex-col gap-y-4 w-[50%]">
            <h1 className="text-3xl font-bold text-white ">
              IOT sensor utilized
            </h1>
            <h1 className="text-base max-w-[70%] text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              deleniti adipisci deserunt nostrum nihil impedit blanditiis odit
              consequuntur at alias harum veritatis, praesentium, facere,
              officiis incidunt minus aut sit. Omnis!
            </h1>
            <Link
              href="#"
              className="py-2 px-4 text-sm rounded-full bg-yellow-600 text-white self-start"
            >
              Learn more
            </Link>
          </div>
          <div className="border-4 border-white w-[50%] rounded-2xl overflow-hidden">
            <Image src={sensors} alt="sensors" />
          </div>
        </div>
      </div>
      <div className="py-16 px-4 flex flex-col gap-y-16 bg-[#ecebe7]">
        <h1 className="text-4xl font-bold text-black/90 text-center">
          Our Services
        </h1>
        <div className="flex justify-around items-center gap-x-8">
          <div className="flex flex-col gap-y-8 justify-center items-center p-8 bg-white rounded-2xl">
            <h1 className="text-lg font-bold text-black/80 text-center ">
              Ai based Weather forcast and prediction
            </h1>
            <Image
              src={weather}
              alt="weather"
              className="rounded-2xl w-[250px]"
            />
            <Link
              href="#"
              className="py-2 px-4 text-sm rounded-full bg-yellow-600 text-white self-center"
            >
              Book for service
            </Link>
          </div>
          <div className="flex flex-col gap-y-8 justify-center items-center p-8 bg-white rounded-2xl">
            <h1 className="text-lg font-bold text-black/80 text-center ">
              Ai based Arable land recommandation
            </h1>
            <Image
              src={arable}
              alt="weather"
              className="rounded-2xl w-[250px]"
            />
            <Link
              href="#"
              className="py-2 px-4 text-sm rounded-full bg-yellow-600 text-white self-center"
            >
              Book for service
            </Link>
          </div>
          <div className="flex flex-col gap-y-8 justify-center items-center p-8 bg-white rounded-2xl">
            <h1 className="text-lg font-bold text-black/80 text-center ">
              IOT based personalized farming strategies
            </h1>
            <Image src={iot} alt="weather" className="w-[250px] rounded-2xl" />
            <Link
              href="#"
              className="py-2 px-4 text-sm rounded-full bg-yellow-600 text-white self-center"
            >
              Book for service
            </Link>
          </div>
        </div>
        <h1 className="text-sm font-bold text-yellow-600 text-center cursor-pointer self-center">
          Or call 5684
        </h1>
      </div>
      <div className="py-16 px-4 flex flex-col gap-y-16 bg-white">
        <h1 className="text-4xl font-bold text-black/90 text-center">
          What you get
        </h1>
      </div>
    </main>
  );
}
