import dotenv from "dotenv";
import postgres from "postgres";
dotenv.config();
console.log(`PG_URI is ${process.env.PG_URI}`);
const sql = postgres(process.env.PG_URI, {
  ssl: {
    rejectUnauthorized: false,
  },
});

export default sql;
