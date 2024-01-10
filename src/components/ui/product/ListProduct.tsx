"use client";
import { useQuery } from "@tanstack/react-query";
import CardProduct from "../../CardProduct";
import { ProductType } from "@/app/types/types";
import Menu from "./Menu";
import { ProductData } from "@/data";

type Props = {
  products: ProductType[];
  categories: string[];
};

const ListProduct = ({ products, categories }: Props) => {
  return (
    <>
      {/* <Menu /> */}
      <div className="my-5 md:hidden">
        <select className="w-full">
          <option>Best Selling</option>
          <option>Newest</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-3 ">
        {/* {products.map((product: ProductType) => (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        ))} */}
        {ProductData.map((product: ProductType) => (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListProduct;
