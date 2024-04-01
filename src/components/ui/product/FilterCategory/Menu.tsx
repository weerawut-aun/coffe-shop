"use client";
import { ProductType } from "@/app/types/types";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  catSlug: string;
  brewing?: any[];
  roastLevel?: any[];
  selectedRoast?: [];
  handelChange: () => void;
};

const Menu = ({
  catSlug,
  brewing,
  roastLevel,
  selectedRoast,
  handelChange,
}: Props) => {
  return (
    <div className="flex gap-5">
      <ul className="flex flex-col">
        <div className="mb-4 text-xl uppercase">
          {catSlug === "all-coffee" ? "Roast" : "Brewing"}
        </div>
        {catSlug === "all-coffee"
          ? roastLevel?.map((item, idx) => (
              <li className="flex items-center gap-2" key={idx}>
                <div>
                  <input
                    className="mt-2 h-6 w-5 cursor-pointer"
                    type="checkbox"
                    value={item}
                    checked={selectedRoast.includes(item)}
                    onChange={handelChange}
                  />
                </div>
                <div className="font-medium uppercase">{item}</div>
              </li>
            ))
          : brewing.map((item, idx) => (
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
                <div className="font-medium uppercase">{item}</div>
              </li>
            ))}
      </ul>

      <ul className="flex flex-col">
        <div className="mb-4 text-xl uppercase">type</div>

        <li className="flex items-center gap-2">
          <div>
            <input className="mt-2 h-6 w-5 cursor-pointer" type="checkbox" />
          </div>
          <div className="font-medium uppercase"></div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
