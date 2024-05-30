import AddButton from "@/components/AddButton";

import ListProduct from "@/components/ui/product/ListProduct";
import ListGoods from "@/components/ui/product/ListGoods";
import { Products } from "@/data";
import { ProductType } from "@/app/types/types";

type Props = {
  params: { category: string };
};

const getProduct = async (catSlug: string) => {
  try {
    // const res = await fetch(
    //   `http://localhost:3000/api/products?cat=${category}`,
    //   {
    //     method: "GET",
    //     cache: "no-store",
    //   }
    const res = await fetch(
      `http://localhost:3000/api/collections/${catSlug}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Faild!");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export async function generateMetadata({ params: { category } }: Props) {
  return {
    title: category,
  };
}

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getProduct(params.category);

  const catSlug = params.category;

  return (
    <main className="bg-orange-50">
      {/* Title */}
      <div className="flex flex-col ">
        <div className=" flex  items-center justify-between">
          <h1 className="px-7 pt-10 text-2xl font-light uppercase md:px-10 md:text-3xl ">
            {catSlug}
          </h1>
          <AddButton category={params.category} />
        </div>

        <div className="w-full">
          {catSlug === "all-coffee" ? (
            <ListProduct products={products} />
          ) : (
            <ListGoods products={products} />
          )}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
