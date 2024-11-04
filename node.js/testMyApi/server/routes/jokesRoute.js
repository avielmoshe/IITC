import express from "express";
import {
  deleteJoke,
  getAllJoke,
  getRandomJoke,
  getJokeById,
  createNewJoke,
  updateJoke,
} from "../controllers/jokeController.js";

// import authUser from "../middleware/auth.js";

// Dummy DB Import
const router = express.Router();
// router.use(authUser);

// Jokes Routes
router.get("/", getAllJoke);

router.get("/random", getRandomJoke);

router.get("/:id", getJokeById);

router.post("/", createNewJoke);

router.patch("/:id", updateJoke);

router.delete("/:id", deleteJoke);

export default router;
