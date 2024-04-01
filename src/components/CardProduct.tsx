"use client";

import { CoffeeType, ProductTypes } from "@/app/types/types";
import { formatPrice } from "@/lib/format";

import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  product: CoffeeType;
}

export default function CardProduct({ product }: CardProductProps) {
  return (
    <>
      <div className="relative flex h-auto w-[35vh] items-center justify-center bg-slate-200  md:h-[60vh] md:w-[50vh] ">
        <Link href={`/collections/all-coffee/product/${product.id}`}>
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt="product"
              width={250}
              height={250}
              className="w-full object-contain md:hidden"
            />
          )}
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt="product"
              width={900}
              height={900}
              className="hidden w-full object-contain md:block"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col flex-wrap gap-4 px-5 pb-5 md:gap-1 md:px-2">
        <Link href={`/product/${product.id}`}>
          <h5 className="py-3 text-sm font-light uppercase md:text-left md:text-lg">
            {product.name}
          </h5>
        </Link>
        <div className="flex gap-5">
          {/* {product.coffee?.map((item, index) => (
            <span
              className="text-xs  font-semibold uppercase lg:text-sm"
              key={index}
            >
              {item.ingredient.join(" · ")}
            </span>
          ))} */}
        </div>
        <span className="text-base font-medium lg:text-sm">
          {formatPrice(product.price)}
        </span>
      </div>
    </>
  );
}
