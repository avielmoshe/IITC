import express from "express";

const router = express.Router();
import {
  getAllTask,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
} from "../controllers/TaskController.js";

router.get("/", getAllTask);

router.get("/:id", getTaskById);

router.post("/", createNewTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
