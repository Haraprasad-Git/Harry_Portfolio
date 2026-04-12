import { PortfolioContent } from "@/app/type";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs"; // IMPORTANT

const filePath = path.join(process.cwd(), "app/data/content.json");

export async function GET() {
  const file = await fs.readFile(filePath, "utf-8");
  const data: PortfolioContent = JSON.parse(file);

  return Response.json(data);
}

export async function POST(req: Request) {
  const body: PortfolioContent = await req.json();

  await fs.writeFile(filePath, JSON.stringify(body, null, 2));

  return Response.json({ success: true });
}