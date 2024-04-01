"use client";

import CardProduct from "../../CardProduct";
import { ProductTypes } from "@/app/types/types";

import { useState } from "react";

type Props = {
  products: ProductTypes[];
  catSlug: string;
};

const ListGoods = ({ products, catSlug }: Props) => {
  const [productData, setProductData] = useState<ProductTypes[]>(products);
  return (
    <>
      <div className="my-5 md:hidden">
        <select className="w-full">
          <option>Best Selling</option>
          <option>Newest</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-3 ">
        {productData &&
          productData?.map((product: ProductTypes) => (
            <li key={product.id}>
              <CardProduct product={product} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListGoods;
