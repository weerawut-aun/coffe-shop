"use client";

import CardProduct from "../../CardProduct";
import { ProductType } from "@/app/types/types";
import { useEffect, useState } from "react";

import MenuCoffee from "./FilterCategory/MenuCoffee";

type Props = {
  products: ProductType[];
  catSlug: string;
};

const ListProduct = ({ products, catSlug }: Props) => {
  const [productData, setProductData] = useState<ProductType[]>(products);
  const [selectedRoast, setSelecteRoast] = useState<any>([]);
  const [selectedType, setSelecteType] = useState<any>([]);
  const [dataPresent, setDataPresent] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<string>("bestSelling");

  //get Uniqure Category Filter
  const getUniqueCatg = (data: ProductType[], field: string) => {
    const variants = data.map((item: any) => {
      return item.variants;
    });

    let newElement = variants.map((curElement: any) => {
      return curElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };
  //get Sort Price
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
  // Categorites Coffee
  const roast = getUniqueCatg(products, "roast");
  const types = getUniqueCatg(products, "types");

  // Sort ascending and descending
  const productsAscending = sortProductsByPrice(products, "ascending");
  const productsDescending = sortProductsByPrice(products, "descending");

  const handleRoastChange = (event: any) => {
    const roast = event.target.value;
    if (event.target.checked) {
      setSelecteRoast([...selectedRoast, roast]);
    } else {
      setSelecteRoast(selectedRoast.filter((roa: any) => roa !== roast));
    }
  };

  const handleTypeChange = (event: any) => {
    const types = event.target.value;
    if (event.target.checked) {
      setSelecteType([...selectedType, types]);
    } else {
      setSelecteType(selectedType.filter((ty: any) => ty !== types));
    }
  };

  useEffect(() => {
    const groupData = products.reduce((acc: any, item: any) => {
      const roast = item.variants.roast;
      const type = item.variants.types;
      if (!acc[roast]) {
        acc[roast] = {};
      }
      if (!acc[roast][type]) {
        acc[roast][type] = [];
      }
      acc[roast][type].push(item);
      return acc;
    }, {});

    if (
      (selectedRoast.length === 0 &&
        selectedType.length === 0 &&
        selectedPrice === "bestSelling") ||
      selectedPrice === "newest"
    ) {
      setProductData(products);
    } else if (selectedRoast.length > 0) {
      const filterData = selectedRoast.flatMap((roast: any) => {
        if (groupData[roast]) {
          if (selectedType.length > 0) {
            return selectedType.flatMap((type: any) => {
              if (groupData[roast][type]) {
                return groupData[roast][type].map((item: any) => ({
                  ...item,
                  type,
                }));
              } else {
                return [];
              }
            });
          } else {
            return Object.values(groupData[roast])
              .flat()
              .map((item: any) => ({ ...item, type: item.type }));
          }
        } else {
          return [];
        }
      });
      if (filterData.length === 0) {
        setProductData([]);
        setDataPresent(true);
      } else {
        setProductData(filterData);
        setDataPresent(false);
      }
    } else if (selectedType.length > 0) {
      const filterData = selectedType.flatMap((type: any) => {
        const itemInType = Object.values(groupData)
          .flatMap((types: any) => types[type] ?? [])
          .map((item: any) => ({ ...item, type }));
        return itemInType;
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
  }, [selectedRoast, selectedType, selectedPrice, products]);

  return (
    <>
      <div className="mt-3">
        <MenuCoffee
          roast={roast}
          types={types}
          selectedRoast={selectedRoast}
          handleRoastChange={handleRoastChange}
          selectedType={selectedType}
          handleTypeChange={handleTypeChange}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-8 md:px-10">
        <div className="px-3">
          <h1 className="font-medium uppercase subpixel-antialiased">
            product <span>({products.length})</span>
          </h1>
        </div>
      </div>
      {/* Select Option  */}
      <div className=" mx-auto mb-8 flex max-w-7xl items-center justify-end gap-2 px-8 md:px-10">
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
        <ul className="grid grid-cols-2 gap-x-10 gap-y-14 lg:grid-cols-3 ">
          {productData.map((product: ProductType) => (
            <li key={product.id}>
              <CardProduct product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListProduct;
