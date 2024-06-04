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
import Image from "next/image";

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
          <div className="grid grid-cols-5 gap-2">
            <div>
              <Image
                width={100}
                height={100}
                className="h-full max-w-full rounded-lg"
                src="https://www.shutterstock.com/image-photo/empty-dry-cracked-swamp-reclamation-600nw-2197989839.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="h-full max-w-full rounded-lg"
                src="https://img.indiafilings.com/learn/wp-content/uploads/2018/07/12005844/Land-Conversion-in-Telangana.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="h-full max-w-full rounded-lg"
                src="https://civileats.com/wp-content/uploads/2013/10/shutterstock_125898755.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="h-full max-w-full rounded-lg"
                src="https://www.shutterstock.com/image-photo/empty-dry-cracked-swamp-reclamation-600nw-2197989839.jpg"
                alt=""
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
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
        <Link
          href={"/details"}
          className="bg-green-700 text-white flex justify-center items-center gap-1 font-bold px-4 capitalize py-1 rounded-[5px]"
        >
          Details <Send size={18} />
        </Link>
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
          <Image
            width={20}
            height={100}
            src="https://play-lh.googleusercontent.com/59qUv8wS5J4I6Z-t3sGIxd7JOHRgXg3EmVRgltjccAtnixv3QYg1LzdF6mwdw-XUSA"
            alt=""
            className="w-[20em] rounded-[10px] h-auto"
          />
          <div className="w-[20em] h-auto p-4 bg-green-700/20 rounded-[10px]">
            <h2 className="font-bold mb-2">Farming Advice:</h2>
            <ul>
              <li>
                <strong>Soil Health:</strong> Regularly test and amend your soil
                to maintain its health. Use organic matter like compost to
                improve soil structure and fertility.
              </li>
              <li>
                <strong>Crop Rotation:</strong> Practice crop rotation to
                prevent soil depletion and reduce pest and disease problems.
              </li>
              <li>
                <strong>Water Management:</strong> Implement efficient
                irrigation systems such as drip irrigation to conserve water and
                ensure your crops get the moisture they need.
              </li>
              <li>
                <strong>Pest Control:</strong> Use integrated pest management
                (IPM) strategies, combining biological, physical, and chemical
                controls to manage pests sustainably.
              </li>
              <li>
                <strong>Diversification:</strong> Diversify your crops to spread
                risk and increase resilience against market and climate
                fluctuations.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
