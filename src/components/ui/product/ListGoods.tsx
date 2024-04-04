"use client";

import CardProduct from "../../CardProduct";
import { GoodsType } from "@/app/types/types";

import { useState } from "react";

type Props = {
  products: GoodsType[];
  catSlug: string;
};

const ListGoods = ({ products, catSlug }: Props) => {
  const [productData, setProductData] = useState<GoodsType[]>(products);

  //get Uniqure Category Filter
  const getUniqueCatg = (data: GoodsType[], field: string) => {
    let newElement = data.map((curElement: any) => {
      return curElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const brewing = getUniqueCatg(products, "brewing");

  return (
    <>
      <div className="h-50 w-50 relative">
        <ul>
          {brewing.map((item, idx) => (
            <li key={idx}>
              <div>{item}</div>
            </li>
          ))}
        </ul>
      </div>
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
          productData?.map((product: GoodsType) => (
            <li key={product.id}>
              <CardProduct product={product} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListGoods;
