import { CoffeeType, ProductType } from "@/app/types/types";
import AddButton from "@/components/AddButton";

import ListProduct from "@/components/ui/product/ListProduct";
import ListGoods from "@/components/ui/product/ListGoods";
import { Products } from "@/data";

type Props = {
  params: { category: string };
};

// const getCategory = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/categories", {
//       method: "GET",
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Faild!");
//     }
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getProduct = async (category: string) => {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/products?cat=${category}`,
//       {
//         method: "GET",
//         cache: "no-store",
//       }
//     );
//     if (!res.ok) {
//       throw new Error("Faild!");
//     }
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

export async function generateMetadata({ params: { category } }: Props) {
  return {
    title: category,
  };
}

const CategoryPage = async ({ params }: Props) => {
  const products = Products;

  const getCategory = (products: any[], catSlug: string) => {
    const productSlug = products.filter(
      (product) => product.catSlug === catSlug
    );
    if (productSlug) {
      return productSlug;
    }
    return [];
  };

  const coffee = getCategory(products, "coffee");
  const goods = getCategory(products, "goods");

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
            <ListProduct products={coffee} catSlug={catSlug} />
          ) : (
            <ListGoods products={goods} catSlug={catSlug} />
          )}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
