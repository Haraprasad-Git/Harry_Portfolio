import { backup } from '@/app/constants';
import pool from './db';

const DB_TIMEOUT = 2000;

export async function getContent() {
    try {
        const queryPromise = pool.query(
            'SELECT content FROM portfolio_content WHERE id = 1'
        );

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Database query timeout')), DB_TIMEOUT)
        );

        const [rows]: any = await Promise.race([
            queryPromise,
            timeoutPromise
        ]);

        return rows?.[0]?.content ?? backup;
    } catch (error) {
        console.error('DB unavailable, falling back to backup:', error);
        return backup;
    }
}