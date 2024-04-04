"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const router = useRouter();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/account");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-orange-50">
      {/* LOGIN */}
      <div className="max-w-98 mx-auto  flex w-full flex-col gap-4 px-6 py-12 uppercase md:w-[400px]">
        <h1 className="mb-4 text-2xl md:text-center">Account Login</h1>
        {/* FORM LOGIN */}
        <form onSubmit={login}>
          <div className="flex flex-col ">
            <label className="my-4 text-xs md:text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              className="mb-4 rounded-md border-none outline-none"
              onChange={(ev: any) => {
                setEmail(ev.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="my-4 text-xs md:text-sm">Paassword</label>
            <input
              type="password"
              name="password"
              className="mb-4 rounded-md border-none outline-none"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <button className="rounded-md bg-black px-6 py-3 text-white">
            Sign In
          </button>
        </form>
        <div className="mt-10">
          <p className="text-sm">
            Don`t have an account yet?{" "}
            <Link
              href="/register"
              className="capitalize underline underline-offset-1"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
