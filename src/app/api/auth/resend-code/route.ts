// import { NextResponse } from "next/server"

// export async function POST() {
//   try {
   
//     await new Promise((resolve) => setTimeout(resolve, 1000))

   
//     return NextResponse.json({ success: true })
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to resend code" }, { status: 500 })
//   }
// }

import { NextResponse } from "next/server"

// Mock user data storage (same as in register and verify routes)
const users: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    const user = users.find((u) => u.email === email)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Generate a new verification code
    const newVerificationCode = Math.floor(1000 + Math.random() * 9000).toString()
    user.verificationCode = newVerificationCode

    // In a real app, send the new verification code to the user's email here

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

