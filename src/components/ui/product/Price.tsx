"use client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/format";
import { useCartStore } from "@/lib/store";
import ButtonGlobal from "@/components/ButtonGlobal";
import { CoffeeType, ProductType } from "@/app/types/types";
import { toast } from "react-toastify";

type Props = {
  product: CoffeeType;
};

function Price({ product }: Props) {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const { products, addToCart } = useCartStore();

  useEffect(() => {
    setTotal(quantity * product.price);
  }, [quantity, product]);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      totalPrice: total,
      quantity: quantity,
    });
  };
  return (
    <div>
      <div className="flex-1 border-b-2 border-dotted border-black p-4 uppercase">
        <h2 className="text-sm">Price:</h2>
        <span className="flex justify-center text-2xl">
          {formatPrice(product.price)}
        </span>
      </div>
      <div className="flex flex-1 justify-between p-4 uppercase">
        <h2 className="text-sm">quantity:</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            <AiOutlineMinus size={21} />
          </button>
          <span className=" border-none bg-white px-4 py-2 outline-none">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
          >
            <AiOutlinePlus size={21} />
          </button>
        </div>
      </div>
      <button
        className="block w-full rounded-sm bg-black px-9 py-3 text-sm uppercase text-white hover:border-2  hover:border-solid hover:border-black hover:bg-white hover:text-black"
        onClick={handleCart}
      >
        Add To Cart {formatPrice(total)}
      </button>
    </div>
  );
}

export default Price;
