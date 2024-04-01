import { ProductType } from "@/app/types/types";
import AddButton from "@/components/AddButton";

import ListProduct from "@/components/ui/product/ListProduct";
import ListGoods from "@/components/ui/product/ListGoods";
import { CoffeeProduct, ProductEx } from "@/data";

type Props = {
  params: { category: string };
};

const getCategory = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild!");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (category: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?cat=${category}`,
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
  // const products: ProductType[] = await getProduct(params.category);
  // const categories: [] = await getCategory();

  const catSlug = params.category;

  const products = CoffeeProduct;
  // const coffeeProducts = ProductEx.filter(
  //   (product) => product.catSlug === "all-coffee"
  // );
  const goodsProducts = ProductEx.filter(
    (product) => product.catSlug === "goods"
  );

  return (
    <main className="bg-orange-50">
      {/* Title */}
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <h1 className="px-7 pt-10 text-2xl font-light uppercase md:px-10 md:text-3xl ">
            {catSlug}
          </h1>
          <AddButton category={params.category} />
        </div>

        <div className="w-full px-7 md:px-10">
          {catSlug === "all-coffee" ? (
            <ListProduct products={products} catSlug={catSlug} />
          ) : (
            <ListGoods products={goodsProducts} catSlug={catSlug} />
          )}
          {/* {catSlug === "all-coffee" ? (
            <ListProduct products={coffeeProducts} catSlug={catSlug} />
          ) : (
            <ListProduct products={goodsProducts} catSlug={catSlug} />
          )} */}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
