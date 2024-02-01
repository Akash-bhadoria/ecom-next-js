import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.user.findMany();
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json({ error: "Failed to load data." + err });
  }
}
