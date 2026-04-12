import mysql from "mysql2/promise";

declare global {
  var _pool: mysql.Pool | undefined;
}

const pool =
  global._pool ||
  mysql.createPool({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 1,
  });

if (!global._pool) {
  global._pool = pool;
}

export default pool;