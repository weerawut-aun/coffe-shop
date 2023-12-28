import Image from "next/image";
import React from "react";
import ButtonGlobal from "../ButtonGlobal";

type Props = {
  bgColor: string;
  title: string;
  desc: string;
  textButton: string;
  refImage: string;
};

const HeroGobal = ({ bgColor, title, desc, textButton, refImage }: Props) => {
  return (
    <div className="flex  w-full flex-col  lg:w-screen  lg:flex-row-reverse">
      <div className="w-full lg:w-6/12">
        <Image
          src={`${refImage}`}
          alt="barner"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className={`w-full ${bgColor} p-16  lg:w-6/12`}>
        <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:px-0 lg:py-10">
          <h1 className="lg:md-4 mb-2 text-4xl font-light uppercase lg:text-5xl ">
            {title}
          </h1>
          <p className="my-2 w-full text-sm lg:w-96 lg:text-start lg:text-lg">
            {desc}
          </p>
          <ButtonGlobal className="block uppercase">{textButton}</ButtonGlobal>
        </div>
      </div>
    </div>
  );
};

export default HeroGobal;
