import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  img?: string;
  title: string;
  price: number;
};

const Card = ({ id, img, title, price }: Props) => {
  return (
    <div className="ml-2 w-full pl-2 md:ml-5">
      <Link href={`/product/${id}`}>
        <div className="relative flex h-[350px] w-full max-w-full justify-center bg-slate-200">
          {img && (
            <Image
              src={img}
              alt="product"
              width={300}
              height={300}
              className="object-cover"
            />
          )}
        </div>
        <div className="flex flex-col justify-start gap-4  ">
          <h5 className="text-xl font-light tracking-widest lg:text-2xl  lg:leading-6  lg:-tracking-tight">
            {title}
          </h5>

          <span className="cursor-none">${price}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
