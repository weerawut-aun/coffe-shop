import ButtonGlobal from "@/components/ButtonGlobal";

import { Article } from "@/components/Article";
import Category from "../components/Category";
import Image from "next/image";
import Slider from "@/components/Slider";
import SliderMoblie from "@/components/SliderMoblie";
import Hero1 from "@/assets/Hero/hero1.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-flow-row lg:grid-cols-2 ">
        <div className="relative lg:order-2">
          <Image src={Hero1} height={1960} width={2940} alt="image" priority />
        </div>
        <div className=" bg-orange-300 p-16 ">
          <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:px-0 lg:py-10">
            <h1 className="lg:md-4 mb-2 text-4xl font-light uppercase lg:text-5xl ">
              our top hits
            </h1>
            <p className="my-2 w-full text-sm lg:w-96 lg:text-start lg:text-lg">
              These best sellers are guaranteed to get you through the day.
            </p>
            <ButtonGlobal>shop best sellers</ButtonGlobal>
          </div>
        </div>
      </section>
      {/* Featured  */}
      <section className="relative ">
        <div className="flex flex-col items-center justify-center gap-10 py-14 pr-12 lg:flex-row lg:gap-0 lg:pr-20">
          <div className="flex flex-1 flex-col items-start  pl-10 pr-20 lg:w-5/12 lg:px-40">
            <h2 className="mb-5 text-2xl font-light uppercase">
              swing into the harvest season
            </h2>
            <p className="mb-5 text-sm font-light">
              These September coffees are brimming with fruity notes and
              colorful aromas.
            </p>
            <Link href={`/new-arrivals`}>
              <ButtonGlobal>shop new coffees</ButtonGlobal>
            </Link>
          </div>

          <div className="relative w-full flex-1 pl-8 lg:flex lg:w-7/12 lg:flex-col lg:justify-center lg:pl-2">
            <Slider />
            <SliderMoblie />
          </div>
        </div>
      </section>
      {/* Type Product */}
      <div className="bg-sky-200 px-5 py-10">
        <Category />
      </div>

      <section className="  w-full [&>*:nth-child(1)]:mb-12 [&>*:nth-child(1)]:bg-teal-500  [&>*:nth-child(2)]:mb-12 [&>*:nth-child(2)]:bg-amber-500 [&>*:nth-child(3)]:bg-slate-300">
        <div className="px-6 py-12 lg:px-14 lg:py-20">
          <Article />
        </div>
        <div className="px-6 py-12 lg:px-14 lg:py-20">
          <Article />
        </div>
        <div className="px-6 py-12 lg:px-14 lg:py-20">
          <Article />
        </div>
      </section>
    </main>
  );
}
