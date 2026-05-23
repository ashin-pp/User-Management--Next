import { connectDB } from "@/lib/db";
import User from "@/models/User"
import bcrypt from "bcryptjs";

export async function POST(req:Request){
    try{
        const body = await req.json();
        await connectDB();
        
        // Simple validation
        if (!body.name || !body.email || !body.password) {
            return Response.json({
                success: false,
                message: "All fields are required"
            }, { status: 400 });
        }

        const existingUser = await User.findOne({ email: body.email });
        if (existingUser) {
            return Response.json({
                success: false,
                message: "Email is already registered"
            }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = await User.create({
            name: body.name,
            email: body.email,
            password: hashedPassword
        });

        return Response.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    }catch(err: any){
        return Response.json({
            success: false,
            message: err?.message || "An error occurred during registration"
        }, { status: 500 });
    }
}