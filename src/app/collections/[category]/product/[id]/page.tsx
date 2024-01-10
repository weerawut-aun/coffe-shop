import Image from "next/image";
import Price from "@/components/ui/product/Price";
import { ProductType } from "@/app/types/types";
import Link from "next/link";
import PathName from "@/components/ui/product/PathName";

interface ProductsPageProps {
  params: {
    id: string;
  };
}
const getDate = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Faild!");
  }
  return res.json();
};

export async function generateMetadata({ params: { id } }: ProductsPageProps) {
  const product = await getDate(id);

  return {
    title: product.name,

    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductsPage({
  params: { id },
}: ProductsPageProps) {
  const product: ProductType = await getDate(id);

  const themeColor = (catSlug: string) => {
    if (catSlug === "good") {
      return "bg-black";
    }

    if (catSlug === "all-coffee") {
      return "bg-sky-300";
    }
  };

  return (
    <div className="bg-slate-200 ">
      <div className="flex flex-col pb-4 lg:flex-row lg:justify-center lg:gap-4">
        {/* Pre-Product */}
        <div className="flex flex-col lg:order-2 lg:w-5/12 ">
          <h2 className="mb-7 flex gap-2 px-10 pt-5 text-sm uppercase">
            <PathName category={product.catSlug} productName={product.name} />
          </h2>
          <div className="relative flex justify-between">
            <div>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Detail */}
        <div className="flex w-full flex-col items-center  border-t-2 border-solid border-black lg:order-1 lg:w-2/12  lg:border-none">
          <div
            className={`flex flex-col items-center rounded-b-lg  ${themeColor(
              product.catSlug
            )} px-3 py-6 lg:text-center`}
          >
            {product.coffee?.length &&
              product.coffee?.map((item) => (
                <p
                  className="mb-10 text-xs uppercase md:text-sm lg:font-medium lg:tracking-wide"
                  key={item.types}
                >
                  {item.types}
                </p>
              ))}

            <h3 className="lg:tracking-tighte w-full text-center text-2xl uppercase lg:text-3xl">
              {product.name}
            </h3>
          </div>
        </div>
        {/* Descrition */}
        <div className="w-full px-20 lg:order-3 lg:mt-20 lg:w-4/12">
          <div className="bg-slate-300">
            <div className="flex-1 border-b-2 border-dotted border-black p-4 uppercase">
              <h2 className="text-sm">Reviews:</h2>
              <span></span>
            </div>
            <Price product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
