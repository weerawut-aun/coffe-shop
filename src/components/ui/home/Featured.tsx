"use client";
import ButtonGlobal from "@/components/ButtonGlobal";
import { featuredProducts } from "@/data";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import NextArrow from "./NextArrow";

const Featured = () => {
  const slideRef = useRef(null);
  const [slideIndex, setSlidIndex] = useState(3);
  const [activeSlidePrev, setActiveSlidePrev] = useState(false);
  const [activeSlideNext, setActiveSlideNext] = useState(false);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setActiveSlideNext(true);
    setActiveSlidePrev(false);
    if (slideIndex === featuredProducts.length) {
      setActiveSlideNext(false);
      setActiveSlidePrev(true);
    }
    if (slideIndex > 3) {
      setActiveSlidePrev(true);
    }
  }, [slideIndex]);

  const slideRight = () => {
    slideRef?.current?.slickNext();

    setSlidIndex((prev) => prev + 1);
  };
  const slideLeft = () => {
    slideRef?.current?.slickPrev();

    setSlidIndex((prev) => prev - 1);
  };
  return (
    <section className="relative">
      <div className="grid-cols-1 overflow-x-hidden py-12 md:container md:grid md:grid-cols-3 md:px-6 md:py-12 lg:mx-auto">
        <div className="mb-12 flex  flex-col items-start justify-start px-5 md:my-12 md:w-3/4 md:max-w-full  md:pr-5 lg:px-6">
          <h2 className="mb-2  text-3xl  font-light uppercase tracking-tight md:text-2xl">
            BEST-SELLING SUBSCRIPTIONS
          </h2>
          <p className="mb-2 text-sm font-light leading-6 -tracking-tight   md:leading-loose">
            Customize a subscription to the finest direct-trade coffees in the
            world.
          </p>
          <Link href={`/new-arrivals`}>
            <ButtonGlobal>shop new coffees</ButtonGlobal>
          </Link>
        </div>
        <div className="md:col-span-2">
          <Slider ref={slideRef} {...settings}>
            {featuredProducts.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                id={item.id}
              />
            ))}
          </Slider>
        </div>
        <div className="absolute bottom-1 right-10 flex">
          {activeSlidePrev ? (
            <div className="cursor-pointer" onClick={slideLeft}>
              <GrPrevious size={20} />
            </div>
          ) : (
            <div className="opacity-5">
              <GrPrevious size={20} />
            </div>
          )}

          <div className="hidden md:block">
            {slideIndex} / {featuredProducts.length}
          </div>
          {activeSlideNext ? (
            <div className="cursor-pointer" onClick={slideRight}>
              <GrFormNext size={25} />
            </div>
          ) : (
            <div className="opacity-5">
              <GrFormNext size={25} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
