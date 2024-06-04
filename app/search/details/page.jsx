import React from "react";

export default function page() {
  return (
    <div className="w-[40vw]">
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
    </div>
  );
}
