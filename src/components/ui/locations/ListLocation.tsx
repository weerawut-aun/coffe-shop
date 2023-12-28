"use client";
import Image from "next/image";
import ButtonGlobal from "../../ButtonGlobal";
import { useEffect, useState } from "react";
import { locations } from "@/data";
import TabLoacations from "./TabLoacations";
import { Location } from "@/app/types/types";

export default function ListLocation() {
  const [locationData, setLocationData] = useState<Location[]>(locations);
  const [tabCityName, setTabCityName] = useState<string>("los angeles");

  const getUniqueCatg = (data: Location[], field: string) => {
    let newElement = data.map((curElement: any) => {
      return curElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const handleChangeTab = (value: string) => {
    setTabCityName(value);
  };

  const cities: string[] = getUniqueCatg(locations, "city");

  useEffect(() => {
    const filted = locations.filter((location) =>
      location.city.includes(tabCityName)
    );
    setLocationData(filted);
  }, [tabCityName]);

  return (
    <div className="mx-auto flex w-full flex-col">
      {/* locations tap menu */}
      <div className="mb-10 flex flex-col">
        <TabLoacations
          cities={cities}
          tabCityName={tabCityName}
          handleChangeTab={handleChangeTab}
        />
      </div>
      <div className=" md:mx-16">
        <h2 className=" mb-5 flex justify-start px-6 text-4xl font-light uppercase md:mb-6 md:px-6 md:text-3xl">
          {tabCityName}
        </h2>
        <ul className=" mt-16 px-6 md:mx-20 md:mt-10">
          {locationData.map((location) => (
            <li
              key={location.id}
              className="my-8 flex flex-col bg-neutral-300 p-0 md:flex-row md:p-12"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={location.imgUrl}
                  alt="location"
                  width={200}
                  height={200}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center p-10 md:w-1/2 md:items-center">
                <div className="flex flex-col font-light">
                  <h3 className="mb-3 text-2xl uppercase">{location.name}</h3>
                  <div className="text-sm font-medium">
                    <p className="md:mb-2">
                      {location.addess} <br />
                      <span className="capitalize"> {location.city}</span>,{" "}
                      {location.state}
                    </p>
                    <p className="md:mb-2">{location.office_hours}</p>
                    <p className="underline md:mb-2">{location.phone}</p>
                    <p className="underline md:mb-2">Map</p>
                  </div>
                  <div className="pt-2">
                    <ButtonGlobal className="block">order ahead</ButtonGlobal>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
