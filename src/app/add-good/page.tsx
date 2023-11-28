"use client";
import FormSubmitButton from "@/components/FormSubmitButton";
import { selectOptionBrewing, selectOptionMerch } from "@/data";
import { useRouter } from "next/navigation";

import { useState } from "react";

type Inputs = {
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};

export default function AddGoodPage() {
  const router = useRouter();
  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    price: 0,
    imageUrl: "",
    category: "",
  });

  const [topping, setTopping] = useState<String>("Brewing");

  const [selectedOption, setSelectedOption] = useState<String>();

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopping(e.target.value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/products/goods", {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
          category: "goods",
          topping,
          selectedOption,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      // console.log(data);

      router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-orange-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 uppercase md:w-[100]">
        <h1 className="mb-4 text-2xl md:text-center">Add Good</h1>
        <form onSubmit={handleSumbit}>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Name</label>
            <input
              type="text"
              name="name"
              className="mb-4 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Price</label>
            <input
              type="number"
              name="price"
              className="mb-4 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Image Url</label>
            <input
              type="url"
              name="imageUrl"
              className="mb-4 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-3">
            <div className="mb-4 flex items-center">
              <input
                type="radio"
                name="brewing"
                id="brewing"
                value="Brewing"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                checked={topping === "Brewing"}
                onChange={onOptionChange}
              />

              <label
                htmlFor="brewing"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Brewing
              </label>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="radio"
                name="merch"
                id="merch"
                value="Merch"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                checked={topping === "Merch"}
                onChange={onOptionChange}
              />
              <label
                htmlFor="merch"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Merch
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">{topping}</label>

            <select name="option" id="" onChange={selectChange}>
              {topping === "Brewing"
                ? selectOptionBrewing.map((item) => (
                    <option value={item.value} key={item.label}>
                      {item.label}
                    </option>
                  ))
                : selectOptionMerch.map((item) => (
                    <option value={item.value} key={item.label}>
                      {item.label}
                    </option>
                  ))}
              <option value=""></option>
            </select>
          </div>

          <FormSubmitButton className="block">Add Good</FormSubmitButton>
        </form>
      </div>
    </div>
  );
}
