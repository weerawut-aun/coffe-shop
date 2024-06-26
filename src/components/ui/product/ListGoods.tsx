"use client";

import CardProduct from "../../CardProduct";
import { ProductType, VariantType } from "@/app/types/types";

import { useEffect, useState } from "react";
import MenuGoods from "./FilterCategory/MenuGoods";

type Props = {
  products: ProductType[];
};

const ListGoods = ({ products }: Props) => {
  const [productData, setProductData] = useState<ProductType[]>(products);
  const [brewingValues, setBrewingValues] = useState<string[]>([]);
  const [merchValues, setMerchValues] = useState<string[]>([]);
  const [selectedBrewing, setSelectedBrewing] = useState<string[]>([]);
  const [selectedMerch, setselectedMerch] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("bestSelling");
  const [dataPresent, setDataPresent] = useState<boolean>(false);

  const getUniqueCatg = async (field: keyof VariantType): Promise<string[]> => {
    // Check if the field is valid
    if (!["brewing", "merch"].includes(field)) {
      throw new Error(`Invalid field: ${field}`);
    }

    // Extract the unique values from the specified field
    const variants = products
      .flatMap((product) => product.variants)
      .flatMap((variant) => variant[field] || [])
      .filter((value) => typeof value === "string") as string[];

    return [...new Set(variants)];
  };

  const sortProductsByPrice = (products: ProductType[], sortOrder: string) => {
    const sortedProducts = [...products];

    sortedProducts.sort((a: any, b: any) => {
      const priceA = Number(a.price);
      const priceB = Number(b.price);

      if (sortOrder === "ascending") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    return sortedProducts;
  };

  // Sort ascending and descending
  const productsAscending = sortProductsByPrice(products, "ascending");
  const productsDescending = sortProductsByPrice(products, "descending");

  const handleBrewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brewing = event.target.value;

    setSelectedBrewing((prev) =>
      prev.includes(brewing)
        ? prev.filter((item) => item !== brewing)
        : [...prev, brewing]
    );
  };

  const handleMerchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const merch = event.target.value;

    setselectedMerch((prev) =>
      prev.includes(merch)
        ? prev.filter((item) => item !== merch)
        : [...prev, merch]
    );
  };

  useEffect(() => {
    getUniqueCatg("brewing").then((values) => setBrewingValues(values));
    getUniqueCatg("merch").then((values) => setMerchValues(values));

    const groupData = products.reduce((acc: any, item: any) => {
      const brewing = item.variants.flatMap((variant: any) => variant.brewing);
      const merch = item.variants.flatMap((variant: any) => variant.merch);

      if (!acc[brewing]) {
        acc[brewing] = {};
      }
      if (!acc[brewing][merch]) {
        acc[brewing][merch] = [];
      }

      acc[brewing][merch].push(item);
      return acc;
    }, {});

    if (
      (selectedBrewing.length === 0 &&
        selectedMerch.length === 0 &&
        selectedPrice === "bestSelling") ||
      selectedPrice === "newest"
    ) {
      setProductData(products);
    } else if (selectedBrewing.length > 0) {
      const filterData = selectedBrewing.flatMap((brewing: any) => {
        if (groupData[brewing]) {
          if (selectedMerch.length > 0) {
            return selectedMerch.flatMap((merch: any) => {
              if (groupData[brewing][merch]) {
                return groupData[brewing][merch].map((item: any) => ({
                  ...item,
                  merch,
                }));
              } else {
                return [];
              }
            });
          } else {
            return Object.values(groupData[brewing])
              .flat()
              .map((item: any) => ({ ...item, merch: item.merch }));
          }
        }
      });

      if (filterData.length === 0) {
        setProductData([]);
        setDataPresent(true);
      } else {
        setProductData(filterData);
        setDataPresent(false);
      }
    } else if (selectedMerch.length > 0) {
      const filterData = selectedMerch.flatMap((merchItem: any) => {
        const itemInMerch = Object.values(groupData)
          .flatMap((merch: any) => merch[merchItem] ?? [])
          .map((item: any) => ({ ...item, merchItem }));
        return itemInMerch;
      });
      if (filterData.length === 0) {
        setProductData([]);
        setDataPresent(true);
      } else {
        setProductData(filterData);
        setDataPresent(false);
      }
    } else if (selectedPrice === "low" || selectedPrice === "high") {
      if (selectedPrice === "low") {
        setProductData(productsAscending);
        setDataPresent(false);
      } else if (selectedPrice === "high") {
        setProductData(productsDescending);
        setDataPresent(false);
      }
    }
  }, [selectedBrewing, selectedMerch, selectedPrice, products]);

  return (
    <>
      <div className="mt-3">
        <MenuGoods
          brewing={brewingValues}
          merch={merchValues}
          selectedBrewing={selectedBrewing}
          selectedMerch={selectedMerch}
          handleBrewChange={handleBrewChange}
          handleMerchChange={handleMerchChange}
        />
        <div className="relative mx-auto max-w-7xl px-8 md:px-10">
          <div className="px-3">
            <h1 className="font-medium uppercase subpixel-antialiased">
              product <span>({products.length})</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Select Option  */}
      <div className="  mx-auto mb-8 flex max-w-7xl items-center justify-end gap-2 px-8 md:px-10">
        <p className="text-sm uppercase">sort by:</p>
        <select
          className="w-50 bg-transparent"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="bestSelling">Best Selling</option>
          <option value="newest">Newest</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </select>
      </div>
      {/* Select Option Mobile */}
      <div className="my-5 md:hidden">
        <select
          className="w-full"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="bestSelling">Best Selling</option>
          <option value="newest">Newest</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </select>
      </div>
      {dataPresent && (
        <div className="grid place-items-center py-10 text-xl text-red-600 ">
          No product is present
        </div>
      )}
      <div className="mx-auto max-w-7xl px-8 md:px-10">
        <ul className="grid grid-cols-2 gap-x-10 gap-y-14  lg:grid-cols-3 ">
          {productData &&
            productData?.map((product: ProductType) => (
              <li key={product.id}>
                <CardProduct product={product} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListGoods;
