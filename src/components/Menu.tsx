"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiSlidersHorizontalFill } from "react-icons/pi";

const Menu = () => {
  const [isQpenFilter, setisOpenFilter] = useState(false);
  return (
    <>
      <div className=" mb-5 px-7 pt-5 md:px-10">
        <div className="relative">
          <button
            className="flex justify-center gap-1 rounded-sm border border-black px-6 py-3"
            onClick={() => setisOpenFilter(true)}
          >
            <PiSlidersHorizontalFill size={20} />
            <span className="text-sm uppercase">Filter</span>
          </button>
          {/* <div
            className={`absolute  top-12 z-50 h-[30vw] w-screen   bg-orange-50 text-black  ${
              isQpenFilter ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div> */}
        </div>
        <div className="relative flex items-center">
          <p className="mt-5 text-sm uppercase">
            {/* product({productTotalCount}) */}
          </p>

          <span className="absolute right-5 my-5  hidden items-center  justify-center text-sm uppercase md:flex">
            Sort By: Best Selling{" "}
            <button>
              <MdKeyboardArrowDown size={30} />
            </button>
          </span>
        </div>
        <div className="my-5 md:hidden">
          <select className="w-full">
            <option>Best Selling</option>
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Menu;
