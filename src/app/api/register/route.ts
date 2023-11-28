import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body.data;
    // console.log(body.data);

    if (!firstName || !lastName || !email || !password) {
      return (
        new NextResponse(
          JSON.stringify({
            messsage: "Missing firstName,lastName,email,password",
          })
        ),
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return new NextResponse(JSON.stringify({ meassage: "Email taken" }), {
        status: 400,
      });
    }

    const name = firstName + " " + lastName;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        emailVerified: new Date(),
      },
    });

    return new NextResponse(JSON.stringify(newUser), {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
