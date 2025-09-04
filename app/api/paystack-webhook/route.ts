import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { nominations, email, paystackReference } = await req.json();

  // Verify payment with Paystack
  const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
  const verifyRes = await fetch(
    `https://api.paystack.co/transaction/verify/${paystackReference}`,
    {
      headers: {
        Authorization: `Bearer ${paystackSecret}`,
        "Content-Type": "application/json",
      },
    }
  );
  const verifyData = await verifyRes.json();

  if (verifyData.status && verifyData.data.status === "success") {
    // Payment is verified, save nominations
    const created = [];
    for (const nom of nominations) {
      const newNom = await prisma.nomination.create({
        data: {
          nominee: nom.nominee,
          category: nom.category,
          quantity: nom.quantity,
        },
      });
      created.push(newNom);
    }
    return NextResponse.json({ status: "success", data: created });
  } else {
    return NextResponse.json(
      { status: "error", message: "Payment not verified" },
      { status: 400 }
    );
  }
}
