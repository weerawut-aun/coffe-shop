"use client";

import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/format";
import { useCartStore } from "@/lib/store";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function CartButton() {
  const [sideCart, setSideCart] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const {
    products,
    totalItems,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: totalPrice,
          products,
          status: "Not paid!",
          userEmail: session?.user.email,
        }),
      });
      const data = await res.json();
      router.push(`/pay/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative  text-black">
      {/* ICON Cart */}
      <button
        className="flex py-3 text-white sm:text-black"
        type="button"
        onClick={() => setSideCart(true)}
      >
        <div className="absolute left-3 top-0">
          <span className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {totalItems}
          </span>
        </div>
        <BiCart size={30} />
      </button>
      {/* Overlay */}
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-10   ${
          sideCart ? "flex" : "hidden"
        } h-full max-h-full w-full touch-none items-center  justify-center overflow-hidden backdrop-brightness-50  `}
        onClick={() => setSideCart(false)}
      />
      {/* SideBar */}
      <div
        className={` fixed  right-0 top-0 z-20 h-full w-[90vw]  bg-red-50 transition-all delay-300 duration-300 ease-in-out md:w-[528px]  md:p-0 xl:w-[35vw]  ${
          sideCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2  md:px-2 md:pt-3">
          <h1 className="flex items-center text-3xl uppercase">
            Bag
            <span className="ml-2 rounded-full px-3 py-1 text-xl outline outline-black">
              {totalItems}
            </span>
          </h1>
          <button onClick={() => setSideCart(false)}>
            <AiOutlineClose size={30} />
          </button>
        </div>

        <ul className="flex  h-[70%] w-full flex-1 flex-col gap-4 overflow-y-scroll">
          {products.length ? (
            products.map((item) => (
              <li
                key={item.id}
                className="flex w-full max-w-2xl items-center justify-around gap-2  p-3"
              >
                {item.imageUrl && (
                  <div className="relative m-0 flex h-36 w-[20%] max-w-full justify-center   p-0">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className=" object-contain"
                    />
                  </div>
                )}

                <div className="relative flex w-[calc(100%-90px)] flex-auto flex-wrap items-center justify-start pl-5  ">
                  <p className="mb-2  pr-5 text-xl uppercase leading-6 md:pr-8">
                    {item.name}
                  </p>
                  <button
                    type="button"
                    className="absolute right-0 top-0 mb-5"
                    onClick={() => removeFromCart(item)}
                  >
                    <RiDeleteBin6Line size={21} />
                  </button>
                  <div className="flex w-1/2 text-left">
                    {item.quantity ? (
                      <button
                        type="button"
                        onClick={() => removeFromCart(item)}
                      >
                        <AiOutlineMinus size={21} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item)}
                      >
                        <AiOutlineMinus size={21} />
                      </button>
                    )}

                    <span className=" border-none bg-white px-4 py-2 outline-none">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increaseQuantity(item)}
                    >
                      <AiOutlinePlus size={21} />
                    </button>
                  </div>

                  <p className=" w-1/2 text-right">{formatPrice(item.price)}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="flex w-full max-w-2xl flex-col  gap-2 overflow-hidden p-3">
              <h1 className="my-4 text-2xl font-medium">YOUR CART IS EMPTY!</h1>
              <p className="text-xl">Add your favorite items to your cart.</p>
            </li>
          )}
          {products.length === 0 && (
            <li className="mt-8 flex px-3">
              <button
                className="block w-full rounded-sm bg-black px-9 py-3 text-sm uppercase text-white hover:border-2  hover:border-solid hover:border-black hover:bg-white hover:text-black"
                onClick={() => setSideCart(false)}
              >
                <Link href={`/collections/all-coffee`}>
                  Show now {formatPrice(totalPrice)}
                </Link>
              </button>
            </li>
          )}
        </ul>

        {products.length !== 0 && (
          <div className="fixed bottom-0 w-full border-t-2 bg-stone-300 p-5 ">
            <div className="flex items-center justify-between">
              <h2 className=" text-2xl font-medium uppercase leading-5 tracking-wider">
                Subtotal
              </h2>
              <p className=" text-2xl font-medium leading-5 tracking-wider">
                {formatPrice(totalPrice)}
              </p>
            </div>
            <div className="mt-8 flex">
              <button
                className="block w-full rounded-sm bg-black px-9 py-3 text-sm uppercase text-white hover:border-2  hover:border-solid hover:border-black hover:bg-white hover:text-black"
                onClick={handleCheckout}
              >
                Check out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
