import connectDB from "./db/index";
const express = require("express");
const app = express();
connectDB();

app.listen(3000, () => {
  console.log("app is listening on port ", PORT);
});
