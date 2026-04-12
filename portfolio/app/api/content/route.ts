import { backup } from "@/app/constants";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows]: any = await pool.query(
      "SELECT content FROM portfolio_content WHERE id = 1"
    );

    return Response.json(rows[0]?.content);
  } catch (err) {
    console.error(err);
    return new Response("Error fetching data", { status: 500 });
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