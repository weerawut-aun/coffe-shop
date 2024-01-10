"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { featuredProducts } from "@/data";

export default function Slider() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(featuredProducts.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === featuredProducts.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div>
      <div className="relative hidden w-full overflow-hidden lg:flex">
        <div
          className={`flex w-full gap-3 transition duration-300 ease-out `}
          style={{
            transform: `translateX(-${current * 34}%)`,
          }}
        >
          {featuredProducts.map((item) => (
            <div className="block " key={item.id}>
              <div className="relative flex h-auto w-[33vh] justify-center bg-slate-200">
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

      <div className="hidden justify-end lg:flex">
        {current === 0 ? (
          <button type="button" disabled className="opacity-10">
            <MdKeyboardArrowLeft size={30} />
          </button>
        ) : (
          <button type="button" onClick={previousSlide} className="">
            <MdKeyboardArrowLeft size={30} />
          </button>
        )}

        {<span> {current}/8</span>}
        {current === featuredProducts.length - 4 + 1 ? (
          <button type="button" disabled className="opacity-10">
            <MdKeyboardArrowRight size={30} />
          </button>
        ) : (
          <button type="button" onClick={nextSlide}>
            <MdKeyboardArrowRight size={30} />
          </button>
        )}
      </div>
    </div>
  );
}
