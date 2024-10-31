import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import joke from "./models/projectModels.js";

const PORT = 3001;
const app = express();
app.use(morgan("tiny"));
app.use(express.json());
const uri =
  "mongodb+srv://mosheavieli:153759Mas@cluster0.1geou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri).then(() => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.status(201).send({ messeage: "hello world" });
});

app.post("/api/joke", async (req, res) => {
  const newJoke = new joke({
    joke: req.body.joke,
  });
  await newJoke.save();
  res.send({
    msg: "good job",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
