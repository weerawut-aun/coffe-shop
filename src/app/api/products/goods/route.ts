import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

//FETCH PRODUCT GOODS
export async function GET(req: NextRequest) {
  return new NextResponse(JSON.stringify({ meassge: "Test " }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, imageUrl, price, category, topping, selectedOption } = body;

    const priceToNum = Number(price);

    const product = await prisma.product.create({
      data: {
        name,
        imageUrl,
        price: priceToNum,
        catSlug: category,
        goods: {
          create: {
            type: [{ title: topping, option: selectedOption }],
          },
        },
      },
    });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
