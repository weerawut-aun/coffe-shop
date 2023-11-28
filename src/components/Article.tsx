import Image from "next/image";
import ButtonGlobal from "./ButtonGlobal";

export function Article() {
  return (
    <div className="flex flex-col items-center justify-around gap-8 lg:flex-row  lg:gap-16">
      <div>
        <Image
          src={`https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60`}
          alt="coffee"
          width={600}
          height={400}
          className=" object-cover"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <div className="flex flex-col gap-8 ">
          <h2 className="text-2xl font-light uppercase">The Bleng Breakdown</h2>
          <p className="text-sm">
            We`ve created a quick guide of seven best-selling coffe blends.
          </p>
        </div>
        <div className="mt-10 ">
          <ButtonGlobal className="block">Get the breakdown</ButtonGlobal>
        </div>
      </div>
    </div>
  );
}
