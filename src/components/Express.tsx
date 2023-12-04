"use client";
import ShopPay from "@/assets/shoppay.png";
import AmazonPay from "@/assets/amazonpay.png";
import PayPal from "@/assets/paypal.png";
import GPay from "@/assets/gicon.png";
import { ButtonPay } from "@/components/ButtonGlobal";
import Image from "next/image";

const Express = () => {
  return (
    <div className="relative flex flex-col gap-2 rounded-md border  border-gray-300 px-5  py-5 lg:flex-row lg:justify-center lg:gap-4">
      <div className="absolute -top-3 left-4 right-4 flex justify-center ">
        <span className="bg-orange-50 px-2 uppercase">express checkout</span>
      </div>
      <ButtonPay className="bg-violet-600 px-4 py-3 hover:bg-violet-700 lg:px-8 lg:py-2">
        <Image src={ShopPay} width={100} height={100} alt="icon" />
      </ButtonPay>
      <ButtonPay className="flex h-12 items-center bg-yellow-200 px-2 py-3 hover:bg-yellow-300 lg:px-8 lg:py-2">
        <Image src={AmazonPay} width={80} height={16} alt="icon" />
      </ButtonPay>
      <ButtonPay className="h-12 bg-yellow-300 px-2 py-3 hover:bg-yellow-400 lg:px-8 lg:py-2">
        <Image src={PayPal} width={80} height={16} alt="icon" />
      </ButtonPay>
      <ButtonPay className="h-12 bg-black px-2 py-3 text-white lg:px-8 lg:py-2">
        <Image
          src={GPay}
          width={40}
          height={40}
          alt="icon"
          className="object-contain"
        />
        Pay
      </ButtonPay>
    </div>
  );
};

export default Express;
