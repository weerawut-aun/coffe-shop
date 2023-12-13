"use client";
import { useQuery } from "@tanstack/react-query";
import CardProduct from "./CardProduct";
import { ProductType } from "@/app/types/types";

const ListProduct = ({ category }: { category: string }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      await fetch(`http://localhost:3000/api/products?cat=${category}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 ">
      {data?.map((product: ProductType) => (
        <li key={product.id}>
          <CardProduct product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ListProduct;
