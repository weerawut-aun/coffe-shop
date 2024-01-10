"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import LogoMain from "@/assets/Verve_logo_main.png";
import { SearchButton } from "./SearchButton";
import { CartButton } from "./CartButton";
import Link from "next/link";
import SideNavbar from "./SideNavbar";
import { BiUser } from "react-icons/bi";

import { useSession } from "next-auth/react";
import MenuItem from "./MenuItem";
import { noHeaderFooter } from "@/data";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathName = usePathname();
  const newPathName = pathName.split("/").splice(1, 1).toString();

  return (
    <header>
      <div
        className={`relative top-0  w-full bg-black text-white ${
          noHeaderFooter.includes(newPathName) && "hidden"
        }`}
      >
        {/* CONTAINER Nav */}
        <nav className="relative flex  items-center p-2 py-5 md:bg-red-50 ">
          {/* left Nav */}
          <div className="flex items-center justify-center gap-3 md:hidden">
            {/* <ToggleButton /> */}
            <SideNavbar />
            <div className="w-10 rounded-full bg-white">
              <Link href={`/`}>
                <Image
                  src={Logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full object-cover"
                />
              </Link>
            </div>
            <p className="text-sm uppercase underline underline-offset-2">
              order ahead
            </p>
          </div>
          <div className="relative left-[40%] hidden md:block md:text-black">
            <Link href="/">
              <Image
                src={LogoMain}
                alt="Logo"
                width={200}
                height={200}
                className="object-cover"
              />
            </Link>
          </div>
          <div className="absolute right-4 flex gap-3 md:text-black">
            <SearchButton />
            <button>
              {session ? (
                <Link href={`/account`}>
                  <BiUser size={30} />
                </Link>
              ) : (
                <Link href={`/login`}>
                  <BiUser size={30} />
                </Link>
              )}
            </button>
            <CartButton />
          </div>
        </nav>
        {/* CONTAINER Menu */}
        <MenuItem />
      </div>
    </header>
  );
}
