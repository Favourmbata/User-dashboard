

import { NextResponse } from "next/server";


type User = {
  id: number;
  email: string;
  verificationCode?: string;
};


const users: User[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newVerificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    user.verificationCode = newVerificationCode;

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
