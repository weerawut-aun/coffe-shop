import Image from "next/image";
import Price from "@/components/ui/product/Price";
import { CoffeeType, ProductType } from "@/app/types/types";
import Link from "next/link";
import PathName from "@/components/ui/product/PathName";

interface Props {
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

export async function generateMetadata({ params: { id } }: Props) {
  const product = await getDate(id);

  return {
    title: product.title,

    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductsPage({ params: { id } }: Props) {
  const product: CoffeeType = await getDate(id);

  return (
    <div className="bg-slate-200 ">
      <div className="flex flex-col pb-4 lg:flex-row lg:justify-center lg:gap-4">
        {/* Pre-Product */}
        <div className="flex flex-col lg:order-2 lg:w-5/12 ">
          <h2 className="mb-7 flex gap-2 px-10 pt-5 text-sm uppercase">
            <PathName category={"all-coffee"} productName={product.title} />
          </h2>
          <div className="relative flex justify-center">
            <div className="hidden  lg:block">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={800}
                height={800}
                className="max-2xl object-contain"
              />
            </div>
            <div className="block lg:hidden">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={800}
                height={800}
                className="max-2xl object-cover"
              />
            </div>
          </div>
        </div>
        {/* Detail */}
        <div className="flex w-full flex-col items-center  border-t-2 border-solid border-black lg:order-1 lg:w-2/12  lg:border-none">
          <div
            className={`flex flex-col items-center rounded-b-lg bg-black px-3 py-6 text-white lg:text-center`}
          >
            <p className="mb-10 text-xs uppercase md:text-sm lg:font-medium lg:tracking-wide">
              {product.type}
            </p>

            <h3 className="lg:tracking-tighte w-full text-center text-2xl uppercase lg:text-3xl">
              {product.title}
            </h3>
          </div>
          <div className="my-10">
            <div className="flex flex-col uppercase">
              <h5 className="text-left text-sm">Roast Level</h5>
              <p className="text-center text-2xl font-light">
                {product.roast} roast
              </p>
            </div>
          </div>
          <div className="my-10">
            <div className="flex flex-col uppercase">
              <h5 className="text-left text-sm">Origins</h5>
              <div className="flex">
                <ul className="flex flex-wrap gap-3">
                  <li>
                    <Image
                      src="/Map/honduras.png"
                      alt={`honduras`}
                      width={90}
                      height={90}
                      className="object-cover"
                    />
                    <p className="text-sm">honduras</p>
                  </li>
                  <li>
                    <Image
                      src="/Map/guatemala.png"
                      alt={`guatemala`}
                      width={90}
                      height={90}
                      className="object-cover"
                    />
                    <p className="text-sm">guatemala</p>
                  </li>
                  <li>
                    <Image
                      src="/Map/colombia.png"
                      alt={`colombia`}
                      width={90}
                      height={90}
                      className="object-cover"
                    />
                    <p className="text-sm">colombia</p>
                  </li>
                </ul>
              </div>
            </div>
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
