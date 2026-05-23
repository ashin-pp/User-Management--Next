import { connectDB } from "@/lib/db"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    await connectDB()

    const user = await User.findOne({
      email: body.email,
    })

    if (!user) {
      return Response.json({
        success: false,
        message: "User not found",
      })
    }

    const isMatch = await bcrypt.compare(
      body.password,
      user.password
    )

    if (!isMatch) {
      return Response.json({
        success: false,
        message: "Invalid credentials",
      })
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    )

    const cookieStore = await cookies()
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return Response.json({
      success: true,
    })
  } catch (error: any) {
    return Response.json({
      success: false,
      message: error?.message || "An error occurred during login",
    })
  }
}
