import express from "express";

const router = express.Router();
import {
  getAllProjects,
  getProjectById,
  createNewProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
router.get("/", getAllProjects);

router.get("/:id", getProjectById);

router.post("/", createNewProject);

router.patch("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;
