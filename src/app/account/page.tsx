"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BiUser } from "react-icons/bi";

const AccountPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return router.push("/login");
  }

  return (
    <div className="flex flex-col px-4 py-10 md:px-10 md:py-12">
      <div className="flex flex-col md:items-center">
        <h1 className="mb-4 text-2xl uppercase">My Account</h1>

        <Link href="/" className="flex items-center" onClick={() => signOut()}>
          <BiUser size={25} />
          <span className="ml-2 text-sm">Log Out</span>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <h1 className="my-4 text-2xl uppercase">Order History</h1>
          <p className="text-sm">You haven`t placed any orders yet.</p>
        </div>
        <div>
          <h1 className="my-4 text-2xl uppercase">Account Destails</h1>
          <div className="mb-3 flex flex-col text-sm">
            <p>{session?.user.name}</p>
            <p>{session?.user.address}</p>
          </div>
          <ul>
            <li>
              <Link href="/" className="text-sm underline underline-offset-1">
                View Address(1)
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm underline underline-offset-1">
                Reset Password
              </Link>
            </li>
            <li>
              <Link href="/" className="text-sm underline underline-offset-1">
                Manage Subscriptions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
