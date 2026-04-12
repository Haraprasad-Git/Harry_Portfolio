import { backup } from "@/app/constants";
import { getContent } from "@/lib/content";
import pool from "@/lib/db";

export async function GET() {
  try {
    const data = await getContent()
    return Response.json(data);
  } catch (err) {
    console.error(err);
    return Response.json(backup);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await pool.query(
      "UPDATE portfolio_content SET content = ? WHERE id = 1",
      [JSON.stringify(body)]
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response("Error updating data", { status: 500 });
  }
}