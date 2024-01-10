"use client";
import { ProductType } from "@/app/types/types";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  category: [];
  selectedRoast: any[];
  handleRoastChange: any;
  selectedType: string[];
  handleTypeChange: any;
};

const Menu = ({
  category,
  selectedType,
  handleTypeChange,
  selectedRoast,
  handleRoastChange,
}: Props) => {
  const pathName = usePathname();
  // Category Products
  const getUniqueCatg = (data: ProductType[], field: string) => {
    let newElement = data.map((curElement: any) => {
      return curElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  // Filter
  const roastFilter = getUniqueCatg(category, "roast");
  const typesFilter = getUniqueCatg(category, "types");

  // roastLevel
  const roastLevelCheck = (roastFilter: string[]) => {
    let level = roastFilter.map((roast: any) => {
      if (roast < 5) {
        return "light";
      } else if (roast >= 5 && roast <= 7) {
        return "medium";
      } else if (roast > 7) {
        return "dark";
      }
    });
    return (level = [...new Set(level)]);
  };

  const roastLevelAll = roastLevelCheck(roastFilter);

  return (
    <div className="flex gap-5">
      {pathName.split("/").pop() === "all-coffee" && (
        <ul className="flex flex-col">
          <div className="mb-4 text-xl uppercase">Roast</div>
          {roastLevelAll.map((roast, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              <div>
                <input
                  className="mt-2 h-6 w-5 cursor-pointer"
                  type="checkbox"
                  value={roast}
                  checked={selectedRoast.includes(roast)}
                  onChange={handleRoastChange}
                />
              </div>
              <div className="font-medium uppercase">{roast}</div>
            </li>
          ))}
        </ul>
      )}

      {pathName.split("/").pop() === "all-coffee" && (
        <ul className="flex flex-col">
          <div className="mb-4 text-xl uppercase">type</div>
          {typesFilter?.map((item: any, idx: number) => (
            <li key={idx} className="flex items-center gap-2">
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
      )}
    </div>
  );
};

export default Menu;
