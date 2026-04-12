import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if (
        email !== process.env.ADMIN_EMAIL ||
        password !== process.env.ADMIN_PASSWORD
    ) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const token = jwt.sign(
        { email: "dummy@email.com" },
        process.env.JWT_SECRET!,
        { expiresIn: "1d" }
    );

    const res = NextResponse.json({ success: true });

    res.cookies.set("admin-auth", token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24,
    });

    return res;
}