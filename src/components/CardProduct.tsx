"use client";

import { CoffeeType, ProductType } from "@/app/types/types";
import { formatPrice } from "@/lib/format";

import Image from "next/image";
import Link from "next/link";

interface Props {
  product: ProductType;
}

export default function CardProduct({ product }: Props) {
  return (
    <>
      <div className="relative flex  items-center justify-center bg-slate-200 ">
        <Link href={`/collections/all-coffee/product/${product.id}`}>
          {product.imageUrl && (
            <Image
              src={product.imageUrl[0]}
              alt="product"
              width={250}
              height={250}
              className="w-full object-contain md:hidden"
            />
          )}
          {product.imageUrl && (
            <Image
              src={product.imageUrl[0]}
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
            {product.title}
          </h5>
        </Link>
        <div className="flex gap-5">
          <span className="text-xs  font-semibold uppercase lg:text-sm">
            {product.variants.ingredient?.join(" · ")}
          </span>
        </div>
        <span className="text-base font-medium lg:text-sm">
          {formatPrice(product.price)}
        </span>
      </div>
    </>
  );
}
