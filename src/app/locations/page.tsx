import ButtonGlobal from "@/components/ButtonGlobal";
import HeroGobal from "@/components/ui/HeroGobal";
import Hero from "@/components/ui/locations/Hero";
import ListLocation from "@/components/ui/locations/ListLocation";

import Image from "next/image";

export const metadata = {
  title: "All Locations",
};
export default function Location() {
  return (
    <main>
      <div className="flex  w-full flex-col    lg:flex-row-reverse">
        <Hero />
      </div>
      <div>
        <div className="flex flex-col py-20">
          {/* shopify-template */}
          <ListLocation />
          {/* Banner 2 */}
          <HeroGobal
            bgColor="bg-slate-100"
            title="  We make Days!"
            desc="  Join us in crafting the future of coffee."
            textButton="Learn More"
            refImage="https://www.vervecoffee.com/cdn/shop/files/kevin_1_1500x.jpg?v=1613665155"
          />
          {/* search location */}
          <div className="  my-20 px-6 text-4xl font-light uppercase md:mx-20 md:mb-10 md:px-6 md:text-3xl">
            <div className="flex flex-col items-center justify-center bg-neutral-300">
              {/* input search */}
              <div className="flex w-full flex-col justify-center gap-2 p-9 md:flex-row ">
                <input
                  type="text"
                  name="location"
                  placeholder="ห้วยพระ, 73, THAILAND"
                  className="w-full rounded-md px-5 py-3 text-xs md:w-[60%]"
                />
                <ButtonGlobal className="3 block font-medium uppercase">
                  search
                </ButtonGlobal>
              </div>
              {/* info location */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:order-2">
                  <Image
                    src={`https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80`}
                    alt="location"
                    width={500}
                    height={500}
                    className="w-full object-cover p-4 md:w-screen"
                  />
                </div>
                <div className="flex w-full flex-col p-10 md:order-1">
                  <div className=" flex flex-col items-center md:flex-row">
                    <p className="mb-2 text-sm uppercase">filter by</p>
                    <div className="flex">
                      <button className="mx-3 rounded-md  border-none bg-white px-2 py-3 text-xs font-medium uppercase text-black outline-none">
                        location type
                      </button>
                      <button className="mx-3 rounded-md  border-none bg-white px-2 py-3 text-xs font-medium uppercase text-black outline-none">
                        product
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col p-10">
                    <span className="text-center text-sm">
                      No results? No worries. Want to check out some fresh new
                      coffees?
                    </span>
                    <br />
                    <span className="text-center text-sm">
                      Show all results?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
