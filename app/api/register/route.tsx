import { NextRequest } from 'next/server';
import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface MongoError extends Error {
  code?: number;
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    await connectDB();
    
    const userData: RegisterRequest = await request.json();
    
    // Basic validation
    if (!userData.name || !userData.email || !userData.password) {
      return Response.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const newUser = new User(userData);
    const savedUser = await newUser.save();
    
    // Remove password from response
    const { password, ...userResponse } = savedUser.toObject();
    
    return Response.json(userResponse, {
      status: 201,
    });
  } catch (err) {
    console.error('Registration error:', err);
    
    const mongoError = err as MongoError;
    
    if (mongoError.code === 11000) {
      return Response.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    } else {
      return Response.json(
        { error: "Something went wrong during registration" },
        { status: 500 }
      );
    }
  }
}
