import ButtonGlobal from "@/components/ButtonGlobal";
import Image from "next/image";
import Link from "next/link";
import Hero2 from "@/assets/Hero/hero2.png";

export const metadata = {
  title: "subscription",
};

export default function Subscription() {
  return (
    <main className="mt-20 bg-orange-50">
      <section className="grid grid-flow-row md:grid-cols-2">
        <div className="relative md:order-2">
          <Image src={Hero2} alt="barner" width={1600} height={1067} priority />
        </div>
        <div className=" bg-sky-100 p-16 ">
          <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:px-0 lg:py-10">
            <h1 className="lg:md-4 mb-2 text-center text-2xl font-light uppercase md:text-left  lg:text-5xl">
              SUBSCRIBE TO EXTRAORDINARY MORNINGS
            </h1>
          </div>
        </div>
      </section>

      {/* icons block */}
      <div className="flex w-full items-center  justify-center bg-slate-200 px-20 py-9 lg:px-0 lg:py-12">
        <div
          className="flex w-full justify-between gap-10 lg:px-4"
          style={{ maxWidth: 1280 }}
        >
          <div className="flex flex-1 flex-col gap-x-4 lg:max-w-[25%]">
            <div className="flex w-full justify-center">
              <Image
                src={`https://www.vervecoffee.com/cdn/shop/files/image_7_bfd37534-e369-47ab-a838-71a4d4b61f1b.png?v=1681866341`}
                alt="icon"
                width={160}
                height={90}
                className="object-cover lg:h-28 lg:max-w-none"
                priority
              />
            </div>
            <p className="text-center text-sm lg:mx-auto lg:mt-9 lg:text-lg">
              Customized deliveries
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-x-4 lg:max-w-[25%]">
            <div className="flex justify-center">
              <Image
                src={`https://www.vervecoffee.com/cdn/shop/files/image_9.png?v=1681866356`}
                alt="icon"
                width={170}
                height={100}
                className="object-cover lg:h-28 lg:max-w-none"
                priority
              />
            </div>
            <p className="text-center text-sm lg:mx-auto lg:mt-9 lg:text-lg">
              Free shipping, always
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-x-4 lg:max-w-[25%]">
            <div className="flex justify-center">
              <Image
                src={`https://www.vervecoffee.com/cdn/shop/files/image_8.png?v=1681866288`}
                alt="icon"
                width={170}
                height={100}
                className="object-cover lg:h-28 lg:max-w-none"
                priority
              />
            </div>
            <p className="text-center text-sm lg:mx-auto lg:mt-9 lg:text-lg">
              Early access & more
            </p>
          </div>
        </div>
      </div>

      {/* shopify section */}
      <div>
        <div>
          <div className="flex flex-col items-center px-6 py-12 text-center">
            <h2 className="text-3xl md:text-5xl">FIND YOUR FAVORITE</h2>
            <p className="mb-8 mt-4 max-w-[75%] text-xl sm:max-w-[85%] md:mt-16 md:text-lg">
              Customize a subscription to the finest direct-trade coffees in the
              world. Whether you’re feeling adventurous or already have a
              favorite, we have a subscription to fit your sipping style.
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="mb-24 px-10 pt-12">
          <div>
            <ul className="gap-x-10 gap-y-20 md:grid md:grid-cols-2 lg:grid  lg:grid-cols-3">
              <li className="mb-20">
                <Image
                  src={`https://www.vervecoffee.com/cdn/shop/files/SO_533x.png?v=1690933129`}
                  alt="image"
                  width={150}
                  height={150}
                  className="mb-10  w-full object-cover"
                />
                <h4 className="w-full text-base">ROASTER’S CHOICE</h4>
                <div className="py-5 lg:mb-10">
                  A rotation of curated coffees.
                </div>
                <ButtonGlobal>
                  <Link href={`/`}>shop roaster`s choice</Link>
                </ButtonGlobal>
              </li>
              <li className="mb-20">
                <Image
                  src={`	https://www.vervecoffee.com/cdn/shop/files/Blends_2.png?v=1690933149`}
                  alt="image"
                  width={150}
                  height={150}
                  className="mb-10  w-full object-cover"
                />
                <h4 className="w-full text-base">PICK YOUR BLEND</h4>
                <div className="py-5 lg:mb-10">
                  Consistently delicious best-sellers.
                </div>
                <ButtonGlobal>
                  <Link href={`/`}>shop blend</Link>
                </ButtonGlobal>
              </li>
              <li className="mb-20">
                <Image
                  src={`https://www.vervecoffee.com/cdn/shop/files/gift.png?v=1690933483`}
                  alt="image"
                  width={150}
                  height={150}
                  className="mb-10  w-full object-cover"
                />
                <h4 className="w-full text-base">Gift Subscriptions</h4>
                <div className="py-5 lg:mb-10">
                  Share the love of Verve coffee.
                </div>
                <ButtonGlobal>
                  <Link href={`/`}>shop gift subscriptions</Link>
                </ButtonGlobal>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="mb-24 bg-green-300 px-0 py-28">
          <div className="flex h-full w-full flex-col px-10 lg:flex-row">
            <div className="relative w-full lg:w-1/2 ">
              <Image
                src={`https://www.vervecoffee.com/cdn/shop/files/image_61_b21b6144-13b5-4729-8e1b-290ec1311d7c_1500x.png?v=1682016747`}
                alt="image"
                width={150}
                height={150}
                className=" w-full object-cover"
              />
            </div>
            <div className="relative flex w-full items-center justify-center  pt-10 lg:w-1/2 lg:p-10">
              <div className="flex flex-col">
                <h2 className="mb-6 text-2xl lg:w-[40rem]">
                  Our Coffee Promise
                </h2>
                <div className="lg:w-98">
                  <p className="pb-8 text-sm">
                    Coffee producers across the globe are experiencing
                    multifaceted challenges including climate change, the global
                    coffee price crisis, and the push for low quality,
                    industrialized varieties of coffee. These challenges have
                    significant implications on the lives of coffee growers, the
                    environment, and the quality of coffee in your cup.
                  </p>
                </div>
                <div className="mt-8 w-full">
                  <ButtonGlobal>more about us</ButtonGlobal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
