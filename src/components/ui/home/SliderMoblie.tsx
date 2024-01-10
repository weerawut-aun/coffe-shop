"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredProducts } from "@/data";

export default function SliderMoblie() {
  let [current, setCurrent] = useState(0);

  let previousSlideMoblie = () => {
    if (current === 0) setCurrent(featuredProducts.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlideMoblie = () => {
    if (current === featuredProducts.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div>
      <div className="relative flex w-full overflow-hidden  lg:hidden">
        <div
          className={`flex w-full gap-9 transition duration-300 ease-out`}
          style={{
            transform: `translateX(-${current * 90}%)`,
          }}
        >
          {featuredProducts.map((item) => (
            <div className="block " key={item.id}>
              <div className="relative flex h-auto w-[60vh] justify-center bg-slate-200 ">
                <Link href={`/product/${item.id}`}>
                  {item.img && (
                    <Image
                      src={item.img}
                      alt="product"
                      width={300}
                      height={300}
                      className="w-full object-cover "
                    />
                  )}
                </Link>
              </div>
              <div className="flex  flex-col gap-4 px-5  pb-5 ">
                <Link href={`/product/${item.id}`}>
                  <h5 className="text-sm font-semibold ">{item.title}</h5>
                </Link>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
          {/* items 1 */}
        </div>
      </div>
      {/* Button Moblie */}
      <div className="flex justify-end lg:hidden">
        {current === 0 ? (
          <button type="button" disabled className="opacity-10">
            <MdKeyboardArrowLeft size={30} />
          </button>
        ) : (
          <button type="button" onClick={previousSlideMoblie}>
            <MdKeyboardArrowLeft size={30} />
          </button>
        )}

        {current === featuredProducts.length - 1 ? (
          <button type="button" disabled className="opacity-10">
            <MdKeyboardArrowRight size={30} />
          </button>
        ) : (
          <button type="button" onClick={nextSlideMoblie}>
            <MdKeyboardArrowRight size={30} />
          </button>
        )}
      </div>
    </div>
  );
}
