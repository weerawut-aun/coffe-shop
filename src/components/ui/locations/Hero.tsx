import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full lg:w-6/12">
        <Image
          src={`https:///www.vervecoffee.com/cdn/shop/files/IMG_2389_1500x.jpg?v=1672442091`}
          alt="barner"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="w-full bg-slate-100 p-16  lg:w-6/12">
        <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:px-0 lg:py-10">
          <h1 className="lg:md-4 mb-2 text-4xl font-light uppercase lg:text-5xl ">
            verve near you
          </h1>
          <p className="my-2 w-full text-sm lg:w-96 lg:text-start lg:text-lg">
            If you are not near one of our cafas, use the map at the bottom of
            this page to search for coffee,instant,and flash brew products sold
            at our retail partnear nationwide.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
