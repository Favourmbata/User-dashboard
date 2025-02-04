// import { NextResponse } from "next/server"

// // Mock user data storage
// const users: any[] = []

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()
//     const { email, phone, password } = body

//     if (users.find((u) => u.email === email)) {
//       return NextResponse.json({ error: "Email already registered" }, { status: 400 })
//     }

   
//     const verificationCode = Math.floor(1000 + Math.random() * 9000).toString()

 
//     const newUser = {
//       id: users.length + 1,
//       email,
//       phone,
//       password, 
//       verificationCode,
//       isVerified: false,
//     }
//     users.push(newUser)

  
//     return NextResponse.json({ success: true })
//   } catch  {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }

import { NextResponse } from "next/server";

// Define the structure of a User
type User = {
  id: number;
  email: string;
  phone: string;
  password: string;
  verificationCode: string;
  isVerified: boolean;
};

// Mock user data storage
const users: User[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, password } = body;

    if (users.find((u) => u.email === email)) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();

    const newUser: User = {
      id: users.length + 1,
      email,
      phone,
      password, // In real applications, hash the password
      verificationCode,
      isVerified: false,
    };
    users.push(newUser);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
