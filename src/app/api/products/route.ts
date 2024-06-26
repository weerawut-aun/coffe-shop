import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany({
    include: {
      variants: true,
    },
  });

  return new NextResponse(JSON.stringify(products));
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { title, imageUrl, catSlug, price, variants } = await req.json();

    const productData = {
      title,
      imageUrl,
      catSlug,
      price,
      variants: {
        create: {},
      },
    };
    if (catSlug === "coffee") {
      productData.variants.create = {
        roast: variants.roast,
        level: variants.level,
        ingredient: variants.ingredient,
        types: variants.types,
        origins: variants.origins,
      };
    } else if (catSlug === "goods") {
      productData.variants.create = {
        brewing: variants.brewing,
        merch: variants.merch,
      };
    }

    await prisma.product.create({
      data: productData,
    });

    const products = await prisma.product.findMany({
      include: {
        variants: true,
      },
    });

    return new NextResponse(JSON.stringify(products));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({
        message: "An error occurred while processing your request.",
      })
    );
  }
}
