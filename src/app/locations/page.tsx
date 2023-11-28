import ButtonGlobal from "@/components/ButtonGlobal";
import ListLocation from "@/components/ListLocation";

import Image from "next/image";

export const metadata = {
  title: "All Locations",
};
export default function Location() {
  return (
    <div className="mt-20 bg-orange-50">
      <div className="flex  w-full flex-col    lg:flex-row-reverse">
        <div className="w-full lg:w-6/12">
          <Image
            src={`https:///www.vervecoffee.com/cdn/shop/files/IMG_2389_1500x.jpg?v=1672442091`}
            alt="barner"
            width={400}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="w-full bg-slate-100 p-16  lg:w-6/12">
          <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:px-0 lg:py-10">
            <h1 className="lg:md-4 mb-2 text-4xl font-light uppercase lg:text-5xl ">
              verve near you
            </h1>
            <p className="my-2 w-full text-sm lg:w-96 lg:text-start lg:text-lg">
              If you are not near one of our cafas, use the map at the bottom of
              this page to search for coffee,instant,and flash brew products
              sold at our retail partnear nationwide.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col py-20">
          {/* locations tap menu */}
          <div className="mb-10 flex flex-col">
            <h2 className="pb-8 text-center text-4xl uppercase md:pb-5 md:text-3xl">
              verve cafes
            </h2>
            <ul className="flex w-full justify-center gap-2 uppercase md:gap-6 md:text-sm">
              <li>los angeles</li>
              <li>palo alto</li>
              <li>san francico</li>
              <li>santa cruz</li>
              <li>japan</li>
            </ul>
          </div>
          {/* shopify-template */}
          <ListLocation />
          {/* Banner 2 */}
          <div className="flex  w-full flex-col  lg:w-screen  lg:flex-row-reverse">
            <div className="w-full lg:w-6/12">
              <Image
                src={`https://www.vervecoffee.com/cdn/shop/files/kevin_1_1500x.jpg?v=1613665155`}
                alt="barner"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="w-full bg-slate-100 p-16  lg:w-6/12">
              <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:px-0 lg:py-10">
                <h1 className="lg:md-4 mb-2 text-4xl font-light uppercase lg:text-5xl ">
                  We make Days!
                </h1>
                <p className="my-2 w-full text-sm lg:w-96 lg:text-start lg:text-lg">
                  Join us in crafting the future of coffee.
                </p>
                <ButtonGlobal className="block uppercase">
                  Learn More
                </ButtonGlobal>
              </div>
            </div>
          </div>
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
    </div>
  );
}
