import { Products } from "@/data";

import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { catSlug: string } }
) {
  const { catSlug } = params;

  if (catSlug === "all-coffee") {
    const productCategory = await prisma.product.findMany({
      where: {
        catSlug: "coffee",
      },
      include: {
        variants: true,
      },
    });
    return new NextResponse(JSON.stringify(productCategory));
  } else if (catSlug === "goods") {
    const productCategory = await prisma.product.findMany({
      where: {
        catSlug: "goods",
      },
      include: {
        variants: true,
      },
    });
    return new NextResponse(JSON.stringify(productCategory));
  }
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
