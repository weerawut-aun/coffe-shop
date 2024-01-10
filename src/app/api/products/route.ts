import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const products = await prisma.product.findMany({
      where: {
        catSlug: cat!,
      },
      include: {
        coffee: true,
      },
    });
    if (products) {
      return new NextResponse(JSON.stringify(products), {
        status: 200,
      });
    } else {
      const products = await prisma.product.findMany({
        where: {
          catSlug: cat!,
        },
        include: {
          goods: true,
        },
      });

      return new NextResponse(JSON.stringify(products), { status: 200 });
    }
  } catch (err) {
    console.log(err);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, imageUrl, price, roast, types, ingredients, category } = body;

    const priceToNum = Number(price);
    const roastToNum = Number(roast);

    const product = await prisma.product.create({
      data: {
        name,
        imageUrl,
        price: priceToNum,
        catSlug: "all-coffee",
        coffee: {
          create: {
            roast: roastToNum,
            types,
            ingredient: ingredients,
          },
        },
      },
    });

    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
