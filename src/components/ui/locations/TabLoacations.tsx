"use client";

import { Value } from "@prisma/client/runtime/library";
import { useState } from "react";

type Props = {
  cities: string[];
  tabCityName: string;
  handleChangeTab: (value: string) => void;
};

const TabLoacations = ({ cities, tabCityName, handleChangeTab }: Props) => {
  return (
    <>
      <h2 className="pb-8 text-center text-4xl uppercase md:pb-5 md:text-3xl">
        verve cafes
      </h2>
      <ul className="flex w-full justify-center gap-3 uppercase md:gap-6 md:text-sm">
        {cities.map((item, idx) => (
          <li key={idx} className="cursor-pointer">
            <button
              className={`border-0 text-sm uppercase md:text-lg ${
                tabCityName === item ? "text-black" : "text-gray-400"
              }`}
              onClick={() => handleChangeTab(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TabLoacations;
