"use server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export interface Candidate {
  fullname: string;
  category: string;
  society: string;
  bio: string;
  num: string;
}

export interface Response {
  status: "success" | "error" | "failed";
  statusCode: 200 | 201 | 400 | 500;
  message?: string;
  data?: any;
}

export const candidates = async () => await prisma.nomination.findMany();
export const addNomination = async (
  nominee: string,
  category: string,
  quantity: number
) => {
  try {
    await prisma.nomination.create({
      data: {
        nominee,
        category,
        quantity,
      },
    });
    console.log("added");
  } catch (e: any) {
    console.log(e.message);
  }
};
