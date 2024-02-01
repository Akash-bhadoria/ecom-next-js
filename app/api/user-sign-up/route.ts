import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  let data = await request.json();
  data = data.formData;

  const userExists = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  return NextResponse.json({ message: "User Already Exist" }, { status: 500 });

  if (!userExists) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        roleId: 3,
      },
    });

    return NextResponse.json(
      { message: "User Registered Successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "User Already Exist" },
      { status: 500 }
    );
  }
}
