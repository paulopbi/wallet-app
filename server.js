import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Working");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
