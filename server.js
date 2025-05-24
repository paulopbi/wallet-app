import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";

dotenv.config();
const app = express();

async function initiDB() {
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

app.get("/", (req, res) => {
  res.send("Working");
});

initiDB().then(() => {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
  });
});
