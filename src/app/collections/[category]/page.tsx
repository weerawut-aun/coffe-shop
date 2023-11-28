import { ProductType } from "@/app/types/types";
import AddButton from "@/components/AddButton";
import CardProduct from "@/components/CardProduct";
import Menu from "@/components/Menu";

const getData = async (category: string) => {
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

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params: { category } }: Props) {
  return {
    title: category,
  };
}

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);
  // const productTotalCount = products.length;

  return (
    <main className="bg-orange-50">
      {/* Title */}
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <h1 className="px-7 pt-10 text-2xl font-light uppercase md:px-10 md:text-3xl">
            {params.category}
          </h1>
          <AddButton category={params.category} />
        </div>
        <Menu />
      </div>
      <div className="w-full px-7 md:px-10">
        <ul className="grid grid-cols-2 lg:grid-cols-3 ">
          {products?.map((product) => (
            <li key={product.id}>
              <CardProduct product={product} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CategoryPage;
