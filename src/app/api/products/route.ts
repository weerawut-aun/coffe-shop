import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const coffee = await prisma.coffee.findMany();

  return new NextResponse(JSON.stringify(coffee));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      imageUrl,
      price,
      level,
      type,
      roast,
      ingredients,
      origins,
      region,
    } = body;

    const priceToInt = Number(price);
    const levelToInt = Number(level);

    if (title.length === 0 || imageUrl.length === 0 || price.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: "กรุณากรอกชื่อ ลิ้งรูปภาพและราคาสินค้า" })
      );
    }

    const product = await prisma.coffee.create({
      data: {
        title,
        imageUrl,
        level: levelToInt,
        price: priceToInt,
        type,
        roast,
        ingredient: ingredients,
        origins,
        region,
      },
    });
    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
