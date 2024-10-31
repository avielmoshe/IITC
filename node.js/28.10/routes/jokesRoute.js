import express from "express";
import { deleteById } from "../app.js";
import Joke from "../models/jokeModel.js";

// import authUser from "../middleware/auth.js";

// Dummy DB Import
const router = express.Router();
// router.use(authUser);

// Jokes Routes
router.get("/", async (req, res) => {
  try {
    const jokes = await Joke.find({});
    if (!jokes.length) {
      res.status(404).send({
        mes: "add new joke to see the jokes",
      });
    }
    res.status(201).send(jokes);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
});

router.get("/random", async (req, res) => {
  try {
    const jokes = await Joke.find({});
    if (!jokes.length) {
      res.status(404).send({
        mes: "add new joke to see the jokes",
      });
    }
    const randomJoke = await Joke.aggregate([
      {
        $sample: {
          size: 1,
        },
      },
    ]);
    res.status(201).send(randomJoke[0]);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
});

// router.get("/:id", (req, res) => {
//   const id = +req.params["id"];
//   const data = jokes.find((joke) => joke.id === id);
//   if (data) {
//     res.send(data);
//   }
//   res.send({
//     error: "error",
//   });
// });

router.post("/", async (req, res) => {
  const { joke } = req.body;
  if (!joke) {
    return res.status(400).json({ error: "joke is required" });
  }
  const newJoke = new Joke({
    joke: req.body.joke,
  });
  await newJoke.save();
  res.send({
    msg: "Good Job!",
  });
});

// router.patch("/:id", (req, res) => {
//   const id = +req.params["id"];
//   const jokeIndex = jokes.findIndex((joke) => joke.id === id);
//   if (jokeIndex === -1) {
//     return res.send({ error: "Joke not found" });
//   }
//   jokes[jokeIndex] = { ...req.body };
//   fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2));
//   res.send({ message: "Joke updated successfully", joke: jokes[jokeIndex] });
// });

// router.delete("/:id", (req, res) => {
//   const id = +req.params["id"];
//   if (deleteById(id, jokes)) {
//     res.send({ error: "joke not found" });
//   }
//   fs.writeFile("db/jokes.json", JSON.stringify(jokes, null, 2));
//   res.send({ message: "removed successfully", remainJokes: jokes });
// });

export default router;
