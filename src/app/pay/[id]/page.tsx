"use client";

import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "@/components/CheckoutForm";
import Link from "next/link";
import Logo from "@/components/Logo";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Express from "@/components/Express";
import ShowTotalPrice from "@/components/ShowTotalPrice";
import ButtonGlobal from "@/components/ButtonGlobal";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const PayPage = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = params;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <main>
      <section className="grid grid-rows-1 gap-2 lg:grid-cols-2 lg:gap-0">
        <div className="relative order-1 flex p-4 lg:px-2 lg:py-5">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        {/* SHOW ORDER SUMMARY */}
        <section className=" order-2 my-5 flex items-center justify-between border border-y-[1px] border-l-0 border-r-0 px-3 py-2 lg:order-2">
          <ShowTotalPrice />
        </section>
        {/* STEP BUY SELL */}
        <section className="order-3 my-3  flex h-10 px-4 text-xs lg:my-1 lg:hidden  lg:px-2">
          <div className="flex items-center gap-2">
            <ListProcess />
          </div>
        </section>
        {/* Try These Best Seller */}
        <section className="order-4  px-5 lg:order-4">
          <h1 className="text-center text-2xl font-semibold uppercase">
            Try These Best Seller
          </h1>
          <div className="my-2 grid grid-cols-1">
            <ProductBuy src="https://cdn.shopify.com/s/files/1/0035/9372/products/Variety_1_400x400.png?v=1673640241" />
            <hr className="my-3 border-spacing-2 border-gray-400 " />
            <ProductBuy src="https://cdn.shopify.com/s/files/1/0035/9372/products/Variety_1_400x400.png?v=1673640241" />
          </div>
        </section>
        <section className="order-5  px-2 lg:order-3 ">
          <div className="mb-6 hidden items-center gap-2 lg:flex">
            <ListProcess />
          </div>
          <Express />
        </section>
        <section className="relative order-6 mx-2 my-3  border border-b-0 border-l-0 border-r-0 border-gray-300 px-2 lg:order-5 lg:my-1  lg:h-10 lg:px-0">
          <p className="absolute -top-3 left-4 right-4 flex justify-center">
            <span className="bg-orange-50 px-2 uppercase">or</span>
          </p>
        </section>

        <section className="order-7  px-3 lg:order-7">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold uppercase">Contact</h1>
            <p>Have an account? Log in</p>
          </div>
          <input
            type="text"
            className="w-full border border-black bg-transparent"
            placeholder="Email or Moblie phone number"
          />
        </section>

        <section className="order-8 px-3 lg:order-9">
          <h1 className="text-3xl font-semibold uppercase">
            Shipping address && Payment
          </h1>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </section>
        {/* CODE */}
        <section className="order-6 hidden  justify-center gap-2 lg:flex">
          <input
            type="text"
            className="w-96 border border-black bg-transparent"
            placeholder="DISCOUNT COUNT OR GIFT CARD"
          />
          <ButtonGlobal>APPLY</ButtonGlobal>
        </section>
        <section className="order-8 hidden flex-col gap-2 lg:flex">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$ 19.75</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Calulated at next step</p>
          </div>
        </section>
      </section>

      <div className="my-2 text-center">
        <Link href="/cart">
          <IoIosArrowBack /> Return to cart
        </Link>
      </div>
    </main>
  );
};

export default PayPage;

export const ProductBuy: React.FC<{ src: string }> = ({ src }) => (
  <div className="flex justify-between">
    <div className="flex gap-2">
      <div className="relative h-16 w-16 border-spacing-3 rounded-md border">
        <Image
          src={src}
          width={362}
          height={400}
          alt="Coffee"
          className="object-contain"
        />
      </div>
      <div className="">
        <p>Craft Instant Coffee Variety Pack</p>
        <p>$ 18</p>
      </div>
    </div>
    <button className=" w-32 rounded-md bg-black px-4 py-2 text-sm font-semibold uppercase text-white">
      Add
    </button>
  </div>
);

const ListProcess = () => (
  <>
    <span>Cart</span>
    <IoIosArrowForward />
    <span>Information</span>
    <IoIosArrowForward />
    <span>Shipping</span>
    <IoIosArrowForward />
    <span>Payment</span>
  </>
);
