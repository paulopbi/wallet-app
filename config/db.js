import { neon } from "@neondatabase/serverless";
import "dotenv/config";

export async function initiDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS transactions(
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      category VARCHAR(255) NOT NULL,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE
    )
    `;
    console.log("Database initialized sucessfully");
  } catch (error) {
    console.log("Error initializing DB", error);
    process.exit(1);
  }
}

//creates a SQL connection
export const sql = neon(process.env.DATABASE_URL);
