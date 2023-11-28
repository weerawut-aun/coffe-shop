"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Auth = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const [data, setData] = useState<Auth>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      const userInfo = await res.json();
      console.log(userInfo);

      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-orange-50">
      {/* SING UP */}
      <div className="flex flex-col gap-4 px-6 py-12 text-center">
        <h1 className="text-2xl">Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="max-w-98 mx-auto flex w-1/2 flex-col">
            <label className="text-left text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              className="my-2 p-2"
              onChange={handleChange}
              value={data.firstName}
            />
          </div>
          <div className="max-w-98 mx-auto flex w-1/2 flex-col">
            <label className="text-left text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="my-2 p-2"
              onChange={handleChange}
              value={data.lastName}
            />
          </div>
          <div className="max-w-98 mx-auto flex w-1/2 flex-col">
            <label className="text-left text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              className="my-2 p-2"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="max-w-98 mx-auto flex w-1/2 flex-col">
            <label className="text-left text-sm">Password</label>
            <input
              type="password"
              name="password"
              className="my-2 p-2"
              onChange={handleChange}
              value={data.password}
            />
            <span className="text-left text-sm">
              Must be at least 8 characters
            </span>
          </div>
          <div className="max-w-98 mx-auto flex w-1/2 flex-col pb-14">
            <button className="my-5 w-40 rounded-md bg-black px-4 py-3 text-white">
              Create
            </button>
            <div className="max-w-98 flex flex-col text-left text-sm md:flex-row">
              <p className="mr-10 normal-case md:mr-2">
                Already have an account?
              </p>
              <Link
                href="/login"
                className="font-semibold capitalize underline underline-offset-1"
              >
                sing in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
