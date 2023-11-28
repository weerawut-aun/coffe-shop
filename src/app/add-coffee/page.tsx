"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  roast: number;
  types: string;
};

const AddCaffeePage = () => {
  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    imageUrl: "",
    price: 0,
    category: "",
    roast: 0,
    types: "",
  });

  const [ingredient, setIngredient] = useState<string>("");

  const [ingredients, setIngredients] = useState<string[]>([]);

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
          category: "coffee",
          ingredients,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
      toast.error("Fail added product");
    }
  };
  return (
    <div className="bg-orange-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 uppercase md:w-[100] ">
        <h1 className="mb-4 text-2xl md:text-center">Add Coffee</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Name</label>
            <input
              type="text"
              name="name"
              className="mb-4 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row  justify-around">
            <div className="flex flex-col">
              <label className="my-4 text-xs md:text-sm">Price</label>
              <input
                type="number"
                name="price"
                className="mb-4 w-80 rounded-md border-none outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-4  text-xs md:text-sm">Roast</label>
              <input
                type="number"
                name="roast"
                className="mb-4 w-80 rounded-md border-none outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="my-4 text-xs md:text-sm">Type</label>
              <input
                type="text"
                name="types"
                className="mb-4 w-80 rounded-md border-none outline-none"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Ingredient</label>

            <input
              type="text"
              name="ingredient"
              className="mb-4 w-80 rounded-md border-none outline-none"
              onChange={(e) => setIngredient(e.target.value)}
            />
          </div>

          <div
            className="w-52 rounded-md bg-black px-6 py-3 text-center text-white"
            onClick={() => setIngredients((prev) => [...prev, ingredient])}
          >
            Add Ingredient
          </div>

          <div className="my-2 flex flex-wrap gap-4">
            {ingredients.map((item, index) => (
              <div
                className="w-52 rounded-md bg-black px-6 py-3 text-center text-white"
                key={index}
                onClick={() =>
                  setIngredients(ingredients.filter((opt) => opt !== item))
                }
              >
                {item}
              </div>
            ))}
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

          {/* <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Title</label>
            <input
              type="text"
              name="title"
              className="mb-4 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Description</label>
            <textarea
              name="description"
              className="mb-4 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div> */}

          <button className="rounded-md bg-black px-6 py-3 text-white">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCaffeePage;
