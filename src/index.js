import connectDB from "./db/index.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
let PORT = process.env.PORT || 8080;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!!", error);
  });

app.get("/", (req, res) => {
  res.send("<h1>Home page </h1>");
});

app.use((req, res, next) => {
  if (true) next();
});
app.get("/login", (req, res) => {
  res.send("<h1>login</h1>");
});
