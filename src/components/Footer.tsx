import FormSubmitButton from "./FormSubmitButton";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoFacebook, BiLogoPinterest, BiLogoVimeo } from "react-icons/bi";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import { FaComment } from "react-icons/fa";
import { AiTwotoneMail, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { HiDevicePhoneMobile } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className=" bg-orange-100 ">
      <div className="px-5 py-9 lg:px-20">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <div className=" flex items-center justify-between text-lg lg:flex-row-reverse">
              <ul className="hidden gap-2 lg:flex">
                <li>
                  <PiInstagramLogoFill size={35} />
                </li>
                <li>
                  <BiLogoFacebook size={35} />
                </li>
                <li>
                  <BiLogoPinterest size={35} />
                </li>
                <li>
                  <AiOutlineTwitter size={35} />
                </li>
                <li>
                  <BiLogoVimeo size={35} />
                </li>
                <li>
                  <AiFillYoutube size={35} />
                </li>
              </ul>
              <div>
                <Link href="/">
                  <Image src={Logo} alt="logo" width={80} height={80} />
                </Link>
              </div>
              <p>
                Refer a Friend
                <Link href="/">
                  <span className="pl-2 underline underline-offset-2 hover:opacity-50">
                    Get $5
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex w-2/3 flex-col gap-6 lg:hidden">
              <h2 className="font-bold uppercase">Be the first to know!</h2>
              <p>
                Subscribers will receive first access to special offers and
                limited relases.
              </p>
              <form action="">
                <input
                  type="text"
                  className="w-full border-spacing-1 border p-3"
                  placeholder="ENTER YOUR EMAIL"
                />
                <FormSubmitButton className="w-full text-lg font-bold">
                  SUBSCRIBE
                </FormSubmitButton>
              </form>
            </div>
          </div>
          <hr className="my-8 border-spacing-1 border border-black" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="hidden w-2/3 flex-col gap-6 lg:flex lg:w-1/3">
              <h2 className="font-bold uppercase">Be the first to know!</h2>
              <p>
                Subscribers will receive first access to special offers and
                limited relases.
              </p>
              <form action="">
                <input
                  type="text"
                  className="w-full border-spacing-1 border p-3"
                  placeholder="ENTER YOUR EMAIL"
                />
                <FormSubmitButton className="w-full text-lg font-bold">
                  SUBSCRIBE
                </FormSubmitButton>
              </form>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold uppercase">contact us</h2>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-5">
                  <FaComment size={30} />
                  <div className="flex flex-col">
                    <span>Live Chat </span>
                    <span>M-F 9:00am - 5:00pm PST</span>
                  </div>
                </li>
                <li className="flex items-center gap-5">
                  <AiTwotoneMail size={30} />
                  <span>support@vecoffee.com</span>
                </li>
                <li className="flex items-center gap-5">
                  <HiDevicePhoneMobile size={30} />
                  <span>831-464-8141</span>
                </li>
              </ul>
            </div>
            <hr className="my-8 border-spacing-1 border border-black lg:hidden" />
            <div>
              <h2 className="font-bold uppercase">support</h2>
              <ul className="flex flex-col gap-2">
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>Orders Status</li>
                <li>Frequently Asked Question</li>
                <li>Manage Subscript</li>
                <li>Git Cards</li>
              </ul>
            </div>
            <hr className="my-8 border-spacing-1 border border-black lg:hidden" />
            <div>
              <h2 className="font-bold uppercase">about verve</h2>
              <ul className="flex flex-col gap-2">
                <li>Jobs</li>
                <li>Story</li>
                <li>Wholesale</li>
                <li>Blog</li>
                <li>Locations</li>
                <li>Farmlevel</li>
              </ul>
            </div>

            <div className="my-4 flex flex-col items-center gap-2 lg:hidden">
              <ul className="flex gap-2">
                <li>
                  <PiInstagramLogoFill size={35} />
                </li>
                <li>
                  <BiLogoFacebook size={35} />
                </li>
                <li>
                  <BiLogoPinterest size={35} />
                </li>
                <li>
                  <AiOutlineTwitter size={35} />
                </li>
                <li>
                  <BiLogoVimeo size={35} />
                </li>
                <li>
                  <AiFillYoutube size={35} />
                </li>
              </ul>
              <p className="text-sm">
                104 BRONSON ST, SUITE 19 SANTA CRUZ, CA 95062
              </p>
            </div>
          </div>
          <hr className="my-8 hidden border-spacing-1 border border-black lg:block" />
          <div>
            <div>
              <ul className="flex flex-col gap-1 text-sm underline underline-offset-1 lg:flex-row lg:gap-4">
                <li>Terms of Use</li>
                <li>Accessibility Statement</li>
                <li>Privacy Policy</li>
                <li>Do Not Sell or Share My Personal Information</li>
              </ul>
            </div>
            <div className="my-6 text-center text-sm lg:text-start">
              <h2>©️ 2023 VERVE COFFEE ROASTERS, ALL RIGHTS RESERVED</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
