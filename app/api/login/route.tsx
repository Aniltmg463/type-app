import { NextRequest } from 'next/server';
import { signCookie } from "../../../lib/auth";
import { connectDB } from "../../../lib/connectDB";
import User, { IUser } from "../../../models/userModel";
import { cookies } from "next/headers";

interface LoginRequest {
  email: string;
  password: string;
}

interface MongoError extends Error {
  code?: number;
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    await connectDB();
    
    const cookieStore = await cookies();
    const loginData: LoginRequest = await request.json();
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
      return Response.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const { email, password } = loginData;
    
    const user: IUser | null = await User.findOne({ email });

    if (!user || user.password !== password) {
      return Response.json(
        { error: "Invalid Credentials!" },
        { status: 401 }
      );
    }

    // Set cookie with user ID
    cookieStore.set("userId", signCookie(user._id.toString()), {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 24 hours
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    // Remove password from response
    const { password: userPassword, ...userResponse } = user.toObject();

    return Response.json({
      message: "Login successful",
      user: userResponse
    }, {
      status: 200,
    });
  } catch (err) {
    console.error('Login error:', err);
    
    const mongoError = err as MongoError;
    
    return Response.json(
      { error: "Something went wrong during login" },
      { status: 500 }
    );
  }
}
