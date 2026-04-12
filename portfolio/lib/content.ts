import { backup } from "@/app/constants";
import pool from "./db";

export async function getContent() {
    try {
        // const [rows]: any = await pool.query(
        //     "SELECT content FROM portfolio_content WHERE id = 1"
        // );

        return backup;
        // return rows?.[0]?.content ?? backup;
    } catch (error) {
        console.error("DB error, falling back to backup:", error);
        return backup;
    }   
}