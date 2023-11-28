"use client";

import { links } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(true)}>
        <RxHamburgerMenu size={30} />
      </button>

      <div
        className={`fixed left-0 top-0 z-50 h-screen w-screen   bg-red-50 text-black  ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-full border-b-2 border-black py-7 pl-5">
          <button onClick={() => setOpen(false)}>
            <AiOutlineClose size={30} />
          </button>
        </div>
        <ul
          className={`flex  flex-col justify-center text-2xl font-light uppercase  `}
        >
          <li
            className="relative px-10 py-5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-black"
            onClick={() => setOpen(false)}
          >
            <Link href={`/collections/all-coffee`}>coffee</Link>
          </li>
          <li
            className="relative px-10 py-5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-black"
            onClick={() => setOpen(false)}
          >
            <Link href={`/subscriptions`}>subscription</Link>
          </li>
          <li
            className="relative px-10 py-5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-black"
            onClick={() => setOpen(false)}
          >
            <Link href={`/collections/goods`}>Goods</Link>
          </li>
          <li
            className="relative px-10 py-5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-black"
            onClick={() => setOpen(false)}
          >
            <Link href={`/story`}>Story</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
