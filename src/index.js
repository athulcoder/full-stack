import connectDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();

app.listen(3000, () => {
  console.log("app is listening on port ", process.env.PORT);
});
