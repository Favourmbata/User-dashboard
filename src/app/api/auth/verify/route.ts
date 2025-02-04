

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { code } = body

    if (/^\d{4}$/.test(code)) {
     
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Invalid verification code. Please enter a 4-digit number." }, { status: 400 })
    }
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

