"use client";
import Link from "next/link";

type Props = {
  category?: string;
  productName: string;
};

const PathName = ({ category, productName }: Props) => {
  return (
    <>
      <Link href={`/`}>Home</Link>/
      {category && (
        <>
          <Link href={`/collections/${category}`}>{category}</Link>/
        </>
      )}
      <Link href={``} className="hover:underline hover:underline-offset-2 ">
        {productName}
      </Link>
    </>
  );
};

export default PathName;
