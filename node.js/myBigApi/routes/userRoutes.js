import express from "express";

const router = express.Router();
import {
  getAllUser,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
router.get("/", getAllUser);

router.get("/:id", getUserById);

router.post("/", createNewUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
