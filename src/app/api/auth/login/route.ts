import { NextResponse } from "next/server"


const users = [
  {
    id: 1,
    email: "test@example.com",
    password: "password123", 
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

   
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    return NextResponse.json({ success: true, user: { id: user.id, email: user.email } })
  } catch  {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

