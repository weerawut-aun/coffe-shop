"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuSettings2 } from "react-icons/lu";

type Props = {
  roast: any[];
  type: any[];
  selectedRoast: any;
  handleRoastChange: (e: any) => void;
  selectedType: any;
  handleTypeChange: (e: any) => void;
};

function MenuCoffee({
  roast,
  type,
  selectedRoast,
  handleRoastChange,
  selectedType,
  handleTypeChange,
}: Props) {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const handleClick = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <>
      <div className="mx-auto flex justify-between">
        <button
          className="my-7 flex cursor-pointer items-center justify-center rounded border border-black px-3 py-2 hover:bg-neutral-300"
          onClick={handleClick}
        >
          <LuSettings2 /> Filter
        </button>
        {openFilter && (
          <button onClick={handleClick}>
            <AiOutlineClose size={30} />
          </button>
        )}
      </div>
      {/* Filter */}

      <div
        className={`${
          openFilter ? "block" : "hidden"
        } absolute z-30 w-full bg-orange-50 duration-500 ease-in`}
      >
        <div className="py-5">
          <div className="flex gap-10">
            {/*-------category 1-------*/}
            <ul className="flex flex-col">
              <div className="mb-4 text-xl uppercase">Roast</div>
              {roast.map((item, idx) => (
                <li className="flex items-center gap-2" key={idx}>
                  <div>
                    <input
                      className="mt-2 h-6 w-5 cursor-pointer"
                      type="checkbox"
                      value={item}
                      checked={selectedRoast.includes(item)}
                      onChange={handleRoastChange}
                    />
                  </div>
                  <div className="font-medium uppercase">{item}</div>
                </li>
              ))}
            </ul>
            {/*-------category 2-------*/}
            <ul className="flex flex-col">
              <div className="mb-4 text-xl uppercase">Type</div>
              {type.map((item, idx) => (
                <li className="flex items-center gap-2" key={idx}>
                  <div>
                    <input
                      className="mt-2 h-6 w-5 cursor-pointer"
                      type="checkbox"
                      value={item}
                      checked={selectedType.includes(item)}
                      onChange={handleTypeChange}
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
}

export default MenuCoffee;
