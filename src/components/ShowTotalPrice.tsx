"use client";

import Image from "next/image";
import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ButtonGlobal from "./ButtonGlobal";
import { formatPrice } from "@/lib/format";
import { useCartStore } from "@/lib/store";

const ShowTotalPrice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products, totalPrice } = useCartStore();
  return (
    <div className="flex w-full flex-col">
      <div
        className="flex w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-1/2 flex-1 gap-2">
          <BiCart size={25} />
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold uppercase transition-all duration-200 ">
              {isOpen ? "Hidden order summary" : "Show order summary"}
            </h3>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        <div className="flex w-1/2 flex-1 justify-end">
          {formatPrice(totalPrice)}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2">
          {products &&
            products.map((product) => (
              <div className="flex justify-between" key={product.id}>
                <div className="flex gap-2">
                  {product.imageUrl && (
                    <div className="relative h-16 w-16 border-spacing-3 rounded-md border">
                      <Image
                        src={product.imageUrl}
                        width={362}
                        height={400}
                        alt="Coffee"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <p>{product.name}</p>
                </div>
                <p>{formatPrice(product.price)}</p>
              </div>
            ))}

          <div className="flex items-center justify-center">
            <input
              type="text"
              className="w-96 border border-black bg-transparent"
              placeholder="DISCOUNT COUNT OR GIFT CARD"
            />
            <ButtonGlobal>APPLY</ButtonGlobal>
          </div>
          <div className="">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Calulated at next step</p>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>usd {formatPrice(totalPrice)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowTotalPrice;
