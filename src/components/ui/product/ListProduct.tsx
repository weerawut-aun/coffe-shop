"use client";

import CardProduct from "../../CardProduct";
import { CoffeeType, ProductTypes } from "@/app/types/types";

import { ProductEx } from "@/data";
import { useEffect, useState } from "react";

import MenuCoffee from "./FilterCategory/MenuCoffee";

type Props = {
  products: CoffeeType[];
  catSlug: string;
};

const ListProduct = ({ products, catSlug }: Props) => {
  const [productData, setProductData] = useState<CoffeeType[]>(products);
  const [selectedRoast, setSelecteRoast] = useState<any>([]);
  const [selectedType, setSelecteType] = useState<any>([]);
  const [dataPresent, setDataPresent] = useState<boolean>(false);

  //get Uniqure Category Filter
  const getUniqueCatg = (data: CoffeeType[], field: string) => {
    let newElement = data.map((curElement: any) => {
      return curElement[field];
    });
    return (newElement = [...new Set(newElement)]);
  };

  const roast = getUniqueCatg(products, "roast");

  const type = getUniqueCatg(products, "type");

  const handleRoastChange = (event: any) => {
    const roast = event.target.value;
    if (event.target.checked) {
      setSelecteRoast([...selectedRoast, roast]);
    } else {
      setSelecteRoast(selectedRoast.filter((roa: any) => roa !== roast));
    }
  };

  const handleTypeChange = (event: any) => {
    const type = event.target.value;
    if (event.target.checked) {
      setSelecteType([...selectedType, type]);
    } else {
      setSelecteType(selectedType.filter((ty: any) => ty !== type));
    }
  };

  useEffect(() => {
    const groupData = products.reduce((acc: any, item: any) => {
      const roast = item.roast;
      const type = item.type;
      if (!acc[roast]) {
        acc[roast] = {};
      }
      if (!acc[roast][type]) {
        acc[roast][type] = [];
      }
      acc[roast][type].push(item);
      return acc;
    }, {});

    if (selectedRoast.length === 0 && selectedType.length === 0) {
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
    }
  }, [selectedRoast, selectedType, products]);

  return (
    <>
      <div className="h-50 w-50 relative">
        <MenuCoffee
          roast={roast}
          type={type}
          selectedRoast={selectedRoast}
          handleRoastChange={handleRoastChange}
          selectedType={selectedType}
          handleTypeChange={handleTypeChange}
        />
      </div>
      <div className="relative ">
        <div className="px-3">
          <h1 className="font-medium uppercase subpixel-antialiased">
            product <span>({products.length})</span>
          </h1>
        </div>
      </div>
      <div className="my-5 flex items-center justify-end gap-2">
        <p className="text-sm uppercase">sort by:</p>
        <select className="w-50 bg-transparent">
          <option>Best Selling</option>
          <option>Newest</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>

      <div className="my-5 md:hidden">
        <select className="w-full">
          <option>Best Selling</option>
          <option>Newest</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>
      {dataPresent && (
        <div className="grid place-items-center py-10 text-xl text-red-600">
          No product is present
        </div>
      )}

      <ul className="grid grid-cols-2 lg:grid-cols-3 ">
        {productData.map((product: CoffeeType) => (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListProduct;
