"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

type Inputs = {
  name: string;
  imageUrl: string;
  price: number;
  level: number;
  roast: string;
  type: string;
};

const AddCaffeePage = () => {
  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    imageUrl: "",
    price: 0,
    level: 0,
    roast: "",
    type: "",
  });

  const [ingredient, setIngredient] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [origin, setOrigin] = useState<string>("");
  const [origins, setOrigins] = useState<string[]>([]);

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
          ingredients,
          origins,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        alert("กรุณากรอกรายละเอียดให้ครบด้วย");

        throw new Error("Failed to submit the data. Please try again.");
      }

      const data = await res.json();

      router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
      toast.error("Fail added product");
    }
  };
  return (
    <div className="bg-orange-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-12 uppercase md:w-[100] ">
        <h1 className="mb-4 text-2xl md:text-center">Add Coffee</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm ">Title</label>
            <input
              type="text"
              name="title"
              className="mb-4 w-96 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4 w-96 text-xs md:text-sm">Image Url</label>
            <input
              type="url"
              name="imageUrl"
              className="mb-4 w-full rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Price</label>
            <input
              type="number"
              name="price"
              className="mb-4 w-96 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4  text-xs md:text-sm">Roast Level</label>
            <input
              type="number"
              name="level"
              className="mb-4 w-96 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4  text-xs md:text-sm">Roast</label>
            <input
              type="text"
              name="roast"
              className="mb-4 w-96 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Type</label>
            <input
              type="text"
              name="type"
              className="mb-4 w-96 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Ingredient</label>

            <input
              type="text"
              name="ingredient"
              className="mb-4 w-96 rounded-md border-none outline-none"
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
            <label className="my-4 text-xs md:text-sm">Region</label>
            <input
              type="text"
              name="region"
              className="mb-4 w-80 rounded-md border-none outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Origins</label>

            <input
              type="text"
              name="origins"
              className="mb-4 w-80 rounded-md border-none outline-none"
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>

          <div
            className="w-52 rounded-md bg-black px-6 py-3 text-center text-white"
            onClick={() => setOrigins((prev) => [...prev, origin])}
          >
            Add Origins
          </div>

          <div className="my-2 flex flex-wrap gap-4">
            {origins.map((item, index) => (
              <div
                className="w-52 rounded-md bg-black px-6 py-3 text-center text-white"
                key={index}
                onClick={() =>
                  setOrigins(origins.filter((opt) => opt !== item))
                }
              >
                {item}
              </div>
            ))}
          </div>

          <button className="rounded-md bg-black px-6 py-3 text-white">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCaffeePage;
