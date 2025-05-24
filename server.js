import express from "express";
import dotenv from "dotenv";
import transactionsRoute from "./routes/transactionsRoute.js";
import { initiDB } from "./config/db.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/transactions", transactionsRoute);

initiDB().then(() => {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
  });
});
