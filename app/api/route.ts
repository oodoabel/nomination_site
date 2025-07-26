import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export interface Candidate {
  fullname: string;
  category: string;
  society: string;
  bio: string;
  num: string;
}

export async function GET() {
  try {
    const candidates = await prisma.nomination.findMany();
    return NextResponse.json({
      status: "success",
      statusCode: 200,
      data: candidates,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      statusCode: 500,
      message: error.message,
    });
  }
}

export async function POST(request: Request) {
  try {
    const { nominee, category, quantity } = await request.json();

    const newNomination = await prisma.nomination.create({
      data: { nominee, category, quantity },
    });

    return NextResponse.json({
      status: "success",
      statusCode: 201,
      data: newNomination,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      statusCode: 500,
      message: error.message,
    });
  }
}
