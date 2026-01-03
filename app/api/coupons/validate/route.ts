/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
 
import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const { code } = await request.json()
    const client = await clientPromise
    const db = client.db("swezesty-db")

    const coupon = await db.collection("coupons").findOne({
      code: code.toUpperCase(),
      active: true,
      expiryDate: { $gt: new Date() },
    })

    if (!coupon) {
      return NextResponse.json({ valid: false, message: "Kupon tidak valid atau sudah kadaluarsa" }, { status: 404 })
    }

    return NextResponse.json({ valid: true, discount: coupon.discount })
  } catch (error) {
    return NextResponse.json({ valid: false, message: "Internal Server Error" }, { status: 500 })
  }
}
