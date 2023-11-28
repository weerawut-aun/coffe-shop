import ButtonGlobal from "@/components/ButtonGlobal";
import Image from "next/image";

export const metadata = {
  title: "Story",
};

export default function Story() {
  return (
    <div className="bg-orange-50">
      <section className="relative w-screen ">
        <div className="md:hidden">
          <Image
            src={`https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80`}
            width={200}
            height={200}
            className="w-full object-cover"
            alt="background"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={`https://images.unsplash.com/photo-1518800383600-44551b3c739c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNvZmZlZSUyMGZhcm18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60`}
            width={200}
            height={200}
            className="w-full object-cover"
            alt="background"
          />
        </div>
        <div className="absolute left-6 top-36 z-10 flex max-w-xs flex-col items-start justify-center gap-6 text-white md:bottom-0 md:left-32 md:top-0 md:max-w-sm">
          <h2 className="inline-flex font-sans text-3xl font-light md:text-5xl">
            LET`S CRAFT THE FUTURE OF COFFEE
          </h2>
          <p className="text-sm md:text-base">
            Sourcing the very best coffee in the world is our passion. With an
            unparalleled focus on craft, quality and relationships, we’re
            dedicated to making a positive impact in our coffee communities from
            Farmlevel to Streetlevel.
          </p>
        </div>
      </section>
      <section className="mt-16 bg-green-300 py-16">
        <h2 className="mb-10 px-10 text-center text-2xl uppercase tracking-wide">
          Here`s how we do it:
        </h2>
        <div className=" mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-10 lg:max-w-7xl lg:flex-row">
          <div className="mb-14 flex-1 items-center justify-center lg:order-1 lg:max-w-md">
            <div className="relative w-full">
              <Image
                src={`https://www.vervecoffee.com/cdn/shop/files/Farmlevel_Header_3.png?v=1654116139`}
                alt="image"
                width={668}
                height={1000}
              />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="mb-14">
              <div className="flex flex-col lg:max-w-sm">
                <h3 className="mb-10 text-xl font-light lg:mt-6">
                  HONORING OUR CRAFT
                </h3>
                <p className="mb-6">
                  Coffee is a craft across the entire seed-to-cup journey.
                  Whether we are innovating, farming, roasting, cupping,
                  sourcing or imagining new ways of doing things, we celebrate
                  our craft every step of the way.
                </p>
              </div>
            </div>
            <div className="mb-14">
              <div className="flex flex-col lg:max-w-sm">
                <h3 className="mb-10 text-xl font-light lg:mt-6">
                  QUALITY IS OUR CAUSE
                </h3>
                <p className="mb-6">
                  By preserving cultivars, experimenting with roasts, curating
                  specialty grade ingredients and bringing to market our coffee,
                  we embrace quality as our guide.
                </p>
              </div>
            </div>
            <div className="mb-14">
              <div className="flex flex-col lg:max-w-sm">
                <h3 className="mb-10 text-xl font-light lg:mt-6">
                  RESPECT FOR RELATIONSHIPS
                </h3>
                <p className="mb-6">
                  We shine because of the people that we work with. From
                  Farmlevel to Streetlevel, we build relationships based on
                  fairness and equitability to foster an empowering and
                  inclusive work environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 bg-sky-500 py-28">
        <div className="mx-auto flex h-full w-full flex-col px-10 lg:flex-row xl:max-w-7xl">
          <div className="relative w-full lg:order-1">
            <Image
              src={`https://www.vervecoffee.com/cdn/shop/files/image_61_7a394fd2-27d8-46bb-9628-0807138d3401_1500x.png?v=1650427326`}
              alt="image"
              height={300}
              width={516}
              className="w-full"
            />
          </div>
          <div className="relative flex w-full items-center pt-10 lg:w-1/2 lg:p-10">
            <div className="flex flex-col">
              <h2 className="mb-6 text-2xl lg:w-96">
                THE FARMLEVEL INITIATIVE
              </h2>
              <div className="my-8 lg:w-96">
                <p>
                  The way that we source the world’s best coffees is what we
                  call The Farmlevel Initiative. It’s our Direct-Trade buying
                  model that includes paying premiums for quality and investing
                  in coffee communities and their environments.{" "}
                </p>
              </div>
              <div className="mt-8 w-full">
                <ButtonGlobal>explore farmlevel</ButtonGlobal>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 bg-amber-500 py-28">
        <div className="mx-auto flex h-full w-full flex-col px-10 lg:flex-row xl:max-w-7xl">
          <div className="relative w-full ">
            <Image
              src={`https://www.vervecoffee.com/cdn/shop/files/IMG_2389_1500x.jpg?v=1672442091`}
              alt="image"
              height={300}
              width={516}
              className="w-full"
            />
          </div>
          <div className="relative flex w-full items-center pt-10 lg:order-1 lg:w-1/2 lg:p-10">
            <div className="flex flex-col">
              <h2 className="mb-6 text-2xl lg:w-96">STREETLEVEL</h2>
              <div className="my-8 lg:w-96">
                <p>
                  Streetlevel is where coffee comes to life in our
                  neighborhoods. It’s sharing our coffee with our communities,
                  giving back, and celebrating art and life.
                </p>
              </div>
              <div className="mt-8 w-full">
                <ButtonGlobal>view our cafes</ButtonGlobal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
