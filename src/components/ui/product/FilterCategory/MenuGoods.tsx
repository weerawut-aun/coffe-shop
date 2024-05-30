"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuSettings2 } from "react-icons/lu";

type Props = {
  brewing: string[];
  merch: string[];
  selectedBrewing: string[];
  selectedMerch: string[];
  handleBrewChange: (e: any) => void;
  handleMerchChange: (e: any) => void;
};

const MenuGoods = ({
  brewing,
  merch,
  handleBrewChange,
  handleMerchChange,
  selectedBrewing,
  selectedMerch,
}: Props) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const handleClick = () => {
    setOpenFilter(!openFilter);
  };
  return (
    <>
      <div className=" mx-auto flex max-w-7xl items-center  px-8 md:px-10">
        <button
          className="my-7 flex cursor-pointer items-center justify-center rounded border border-black px-3 py-2 hover:bg-neutral-300"
          onClick={handleClick}
        >
          <LuSettings2 /> Filter
        </button>
        {openFilter && (
          <button className="ml-[1120px]" onClick={handleClick}>
            <AiOutlineClose size={30} />
          </button>
        )}
      </div>
      <div
        className={`${
          openFilter ? "block" : "hidden"
        } absolute z-30 w-full bg-orange-50 p-8 shadow-md duration-500 ease-in`}
      >
        <div className="mx-auto  max-w-7xl  px-9 py-5">
          <div className="flex gap-10">
            {/*-------category 1-------*/}
            <ul className="flex flex-col">
              <div className="mb-4 text-xl uppercase">Brewing</div>
              {brewing?.map((item, idx) => (
                <li className="flex items-center gap-2" key={idx}>
                  <div>
                    <input
                      className="mt-2 h-6 w-5 cursor-pointer"
                      type="checkbox"
                      value={item}
                      checked={selectedBrewing.includes(item)}
                      onChange={handleBrewChange}
                    />
                  </div>
                  <div className="font-medium uppercase">{item} </div>
                </li>
              ))}
            </ul>
            {/*-------category 2-------*/}
            <ul className="flex flex-col">
              <div className="mb-4 text-xl uppercase">Merch</div>
              {merch?.map((item, idx) => (
                <li className="flex items-center gap-2" key={idx}>
                  <div>
                    <input
                      className="mt-2 h-6 w-5 cursor-pointer"
                      type="checkbox"
                      value={item}
                      checked={selectedMerch.includes(item)}
                      onChange={handleMerchChange}
                    />
                  </div>
                  <div className="font-medium uppercase">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuGoods;
