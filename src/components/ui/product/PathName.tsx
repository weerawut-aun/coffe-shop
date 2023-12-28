"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  category?: string;
};

const PathName = ({ category }: Props) => {
  const pathName = usePathname();
  return (
    <>
      <Link href={`/`}>Home</Link>/
      {category && (
        <>
          <Link href={`/collections/${category}`}>{category}</Link>/
        </>
      )}
      <Link href={``} className="underline-offset-1">
        {pathName.split("/").pop()}
      </Link>
    </>
  );
};

export default PathName;
