import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const MenuItem = () => {
  return (
    <nav className="relative flex justify-center text-sm font-medium uppercase md:justify-between lg:justify-center">
      <ul className=" flex  w-full justify-center gap-8 p-3 md:gap-20  md:text-sm ">
        <li className="block cursor-pointer hover:text-orange-400 md:hidden">
          <Link href={`/quiz`}>coffee finder</Link>
        </li>
        <li className="block cursor-pointer hover:text-orange-400 md:hidden">
          <Link href={`/`}>New</Link>
        </li>
        <li className="cursor-pointer hover:text-orange-400">
          <Link href={`/collections/all-coffee`}>coffee</Link>
        </li>
        <li className="cursor-pointer hover:text-orange-400">
          <Link href={`/subscriptions`}>subscription</Link>
        </li>
        <li className="cursor-pointer hover:text-orange-400">
          <Link href={`/locations`}>Locations</Link>
        </li>
        <li className="hidden cursor-pointer hover:text-orange-400 md:block">
          <Link href={`/collections/goods`}>Goods</Link>
        </li>
        <li className="hidden cursor-pointer hover:text-orange-400 md:block">
          <Link href={`/story`}>Story</Link>
        </li>
      </ul>
      <div className="absolute right-4 top-3">
        <Link
          href={"/"}
          className="hidden items-center gap-2 hover:text-orange-400 md:flex"
        >
          quiz <AiOutlineRight size={25} />
        </Link>
      </div>
    </nav>
  );
};

export default MenuItem;
