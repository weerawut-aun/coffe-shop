import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const categoies = await prisma.coffee.findMany();
    if (categoies) {
      return new NextResponse(JSON.stringify(categoies), {
        status: 200,
      });
    } else {
      const categoies = await prisma.good.findMany();
      return new NextResponse(JSON.stringify(categoies), {
        status: 200,
      });
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
