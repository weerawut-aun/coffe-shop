"use client";
import { featuredNotificate } from "@/data";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Notificated() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) =>
  //         prev === featuredNotificate.length - 1 ? 0 : prev + 1
  //       ),
  //     10000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className="relative z-20 h-10 bg-amber-600 px-4 py-3 text-white">
        <div className="flex w-full items-center justify-center md:hidden">
          <p className="text-center">{featuredNotificate[currentSlide].text}</p>
        </div>
        <div className="hidden h-full  justify-between md:flex">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <button className="btn">
                <MdKeyboardArrowLeft size={30} />
              </button>
              <button>
                <MdKeyboardArrowRight size={30} />
              </button>
            </div>

            <p>{featuredNotificate[currentSlide].text}</p>
          </div>
          <div className="flex items-center justify-center">
            <p>in-store orders ahead</p>
            <MdKeyboardArrowRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
