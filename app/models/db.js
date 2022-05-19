import dotenv from "dotenv";
import postgres from "postgres";
dotenv.config();

const sql = postgres(process.env.PG_URI, {
  ssl: {
    rejectUnauthorized: false,
  },
});

export default sql;
