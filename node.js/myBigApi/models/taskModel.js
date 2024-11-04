import mongoose from "mongoose";
import project from "./projectModel.js";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
  dueDate: {
    type: Date,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
    required: true,
  },
});

export default mongoose.model("Task", taskSchema);
