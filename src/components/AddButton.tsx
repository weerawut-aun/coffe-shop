"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineFolderAdd } from "react-icons/ai";

type Props = {
  category: string;
};

const AddButton = ({ category }: Props) => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  return (
    <Link
      href={category === "all-coffee" ? "/add-coffee" : "/add-good"}
      className="mr-12 rounded-full bg-black p-4 text-white hover:bg-slate-50 hover:text-black"
    >
      <AiOutlineFolderAdd size={25} />
    </Link>
  );
};

export default AddButton;
