import React from "react";
import { BookmarkPlus, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function SearchList({ showemail }) {
  return (
    <div className="border-green-700 relative border-2 rounded-[10px] flex flex-col gap-4 w-[40em] h-auto p-4">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl uppercase">Jimma</div>
        <div className="flex gap-2 justify-center items-center">
          <div className="bg-yellow-400/40 text-yellow-700 font-bold capitalize px-2 py-1 rounded-[5px] text-sm">
            private
          </div>
          <BookmarkPlus className="text-green-700" />
        </div>
      </div>
      {showemail && (
        <div className="grid gap-4">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39870.26334078943!2d36.81737396639111!3d7.675010809868168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17adb882f6e6a723%3A0xf45a83bb90208fd8!2sJimma!5e1!3m2!1sen!2set!4v1717450285051!5m2!1sen!2set"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-full max-w-full rounded-lg"
                src="https://www.shutterstock.com/image-photo/empty-dry-cracked-swamp-reclamation-600nw-2197989839.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full max-w-full rounded-lg"
                src="https://img.indiafilings.com/learn/wp-content/uploads/2018/07/12005844/Land-Conversion-in-Telangana.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full max-w-full rounded-lg"
                src="https://civileats.com/wp-content/uploads/2013/10/shutterstock_125898755.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full max-w-full rounded-lg"
                src="https://www.shutterstock.com/image-photo/empty-dry-cracked-swamp-reclamation-600nw-2197989839.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-full max-w-full rounded-lg"
                src="https://www.shutterstock.com/shutterstock/videos/3486416823/thumb/1.jpg?ip=x480"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      <div className="text-black/50">0987654321 - Addis Abeba, 20 Jan 2024</div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nemo
        vel quasi ipsa laborum culpa, optio, ex vitae quos illum harum
        exercitationem tempora corporis...
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-start items-center gap-4">
          <div className="border-green-700/50 text-green-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
            157 hec
          </div>
          <div className="border-green-700/50 text-green-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
            50 quntal
          </div>
          <div className="border-green-700/50 text-green-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
            2m profit
          </div>
          <div className="border-green-700/50 text-green-700 capitalize font-bold border-2 px-4 py-1 rounded-[5px]">
            dega
          </div>
        </div>
        {!showemail && (
          <Link
            href={"/search/details"}
            className="bg-green-700 text-white flex justify-center items-center gap-1 font-bold px-4 capitalize py-1 rounded-[5px]"
          >
            Detail <Send size={18} />
          </Link>
        )}
      </div>

      {showemail && (
        <>
          <Accordion
            type="single"
            collapsible
            className="border-sky-900 rounded-[5px] border-2 px-2"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div>Interested</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 ">
                  <Input
                    className="rounded-[5px] h-[45px] focus:border-sky-900  border-gray-200 border-2 placeholder:text-gray-400"
                    type="email"
                    placeholder="email@example.com"
                  />
                  <Input
                    className="rounded-[5px] h-[45px]  border-gray-200 focus:border-sky-900 border-2 placeholder:text-gray-400"
                    type="text"
                    placeholder="email content..."
                  />
                  <Button className="bg-sky-900 hover:bg-sky-900/90 text-white font-semibold w-[10em] rounded-[5px]">
                    Send Email
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}
      {showemail && (
        <div className="absolute  flex flex-col  left-[103%] top-0 gap-4">
          <img
            src="https://marketplace.canva.com/EAFK3OzSDso/1/0/1600w/canva-minimal-weather-facebook-post-tJPPDoCmp5E.jpg"
            alt=""
            className="w-[20em] rounded-[10px] h-[12em]"
          />
          <div className="w-[20em] h-[12em] bg-green-200 rounded-[10px]"></div>
          <div className="w-[20em] h-[12em] bg-sky-200 rounded-[10px]"></div>
        </div>
      )}
    </div>
  );
}
