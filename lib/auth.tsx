import User, { IUser } from "../models/userModel";
import { createHmac } from "crypto";
import { cookies } from "next/headers";
import { connectDB } from "./connectDB";

interface AuthError {
  error: string;
}

export async function getLoggedInUser(): Promise<IUser | Response> {
  try {
    await connectDB();
    
    const cookieStore = await cookies();
    const errorResponse = Response.json(
      { error: "Please login" } as AuthError,
      {
        status: 401,
      }
    );
    
    const cookie = cookieStore.get("userId")?.value;

    if (!cookie) {
      return errorResponse;
    }

    const userId: string | false = verifyCookie(cookie);

    if (!userId) {
      return errorResponse;
    }

    const user: IUser | null = await User.findById(userId);

    if (!user) {
      return errorResponse;
    }

    return user;
  } catch (error) {
    console.error('Auth error:', error);
    return Response.json(
      { error: "Authentication failed" } as AuthError,
      { status: 500 }
    );
  }
}

export function signCookie(cookie: string): string {
  if (!process.env.COOKIE_SECRET) {
    throw new Error("COOKIE_SECRET environment variable is required");
  }
  
  const signature = createHmac("sha256", process.env.COOKIE_SECRET)
    .update(cookie)
    .digest("hex");

  return `${cookie}.${signature}`;
}

export function verifyCookie(signedCookie: string): string | false {
  try {
    if (!signedCookie || typeof signedCookie !== 'string') {
      return false;
    }

    const parts = signedCookie.split(".");
    
    if (parts.length !== 2) {
      return false;
    }

    const [cookie, cookieSignature] = parts;
    
    if (!cookie || !cookieSignature) {
      return false;
    }

    const expectedSignature = signCookie(cookie).split(".")[1];

    // Use timing-safe comparison to prevent timing attacks
    if (expectedSignature.length !== cookieSignature.length) {
      return false;
    }

    let result = 0;
    for (let i = 0; i < expectedSignature.length; i++) {
      result |= expectedSignature.charCodeAt(i) ^ cookieSignature.charCodeAt(i);
    }

    if (result === 0) {
      return cookie;
    }

    return false;
  } catch (error) {
    console.error('Cookie verification error:', error);
    return false;
  }
}

// Helper function to clear authentication cookie
export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("userId");
}

// Helper function to check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const result = await getLoggedInUser();
  return !(result instanceof Response);
}
