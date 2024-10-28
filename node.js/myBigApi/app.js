import express from "express";
import { math } from "./utils/math.js";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  console.log(math.add(2, 3));
  res.send("hello word");
});

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
