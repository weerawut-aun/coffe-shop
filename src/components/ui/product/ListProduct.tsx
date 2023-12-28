"use client";
import { useQuery } from "@tanstack/react-query";
import CardProduct from "../../CardProduct";
import { ProductType } from "@/app/types/types";
import Menu from "./Menu";
import { useEffect, useState } from "react";

type Props = {
  products: ProductType[];
  category: string;
  filterCat: [];
};

const ListProduct = ({ products, category, filterCat }: Props) => {
  const [selectedRoast, setSelectedRoast] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [productData, setProductData] = useState<ProductType[]>(products);
  const [dataPresent, setDataPresent] = useState<boolean>(false);

  const handleRoastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roast = e.target.value;
    if (e.target.checked) {
      setSelectedRoast([...selectedRoast, roast]);
    } else {
      setSelectedRoast(selectedRoast.filter((prev: any) => prev !== roast));
    }
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value;
    if (e.target.checked) {
      setSelectedType([...selectedType, type]);
    } else {
      setSelectedType(selectedType.filter((prev: any) => prev !== type));
    }
  };

  useEffect(() => {
    const groupedData = products.reduce((acc: any, item: any) => {
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
        if (groupedData[roast]) {
          if (selectedType.length > 0) {
            return selectedType.flatMap((type: any) => {
              if (groupedData[roast][type]) {
                return groupedData[roast][type].map((item: any) => ({
                  ...item,
                  type,
                }));
              } else {
                return [];
              }
            });
          } else {
            return Object.values(groupedData[roast])
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
        const itemInType = Object.values(groupedData)
          .flatMap((type: any) => type[type] ?? [])
          .map((item: any) => ({ ...item, type }));

        return itemInType;
      });
      if (filterData.length === 0) {
        setProductData([]);
        setDataPresent(true);
      } else {
        setProductData(products);
        setDataPresent(false);
      }
    }
  }, [selectedRoast, selectedType, products]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      await fetch(`http://localhost:3000/api/products?cat=${category}`).then(
        (res) => res.json()
      ),
  });
  // const [isQpenFilter, setIsOpenFilter] = useState(false);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Menu
        categories={filterCat}
        selectedType={selectedType}
        handleTypeChange={handleTypeChange}
        selectedRoast={selectedRoast}
        handleRoastChange={handleRoastChange}
      />
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
        {productData.map((product: ProductType) => (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListProduct;
