import { OrderType } from "@/app/types/types";
import { formatPrice } from "@/lib/format";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Order = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";
  return (
    <>
      <h1 className=" text-2xl uppercase">Order History</h1>
      <div className="h-[88%] overflow-y-scroll">
        {!data ? (
          <p className="text-sm">You haven`t placed any orders yet.</p>
        ) : (
          data.map((item: OrderType) => (
            <Link
              href={`product/${item.id}`}
              className="my-4  w-full"
              key={item.id}
            >
              <div className="flex flex-col  justify-center">
                <div className="flex items-center justify-center">
                  {item.products[0].imageUrl && (
                    <div className="">
                      <Image
                        src={item.products[0].imageUrl}
                        alt={item.products[0].name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="text-xl font-bold">{item.products[0].name}</p>
                </div>
                <div className="flex justify-between">
                  <p className="ml-9">{formatPrice(item.price)}</p>
                  <p
                    className={
                      item.status === "Not paid!"
                        ? `text-red-500`
                        : "text-green-600"
                    }
                  >
                    {item.status}
                  </p>
                </div>
              </div>
              <hr />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Order;
