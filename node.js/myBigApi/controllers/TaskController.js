import Task from "../models/taskModel.js";
import project from "../models/projectModel.js";

export const createNewTask = async (req, res) => {
  try {
    const { title, projectId } = req.body;
    const id = projectId;
    await project.findById(id);
    if (!title || !projectId) {
      return res
        .status(400)
        .json({ error: "title and projectId for the task is required" });
    }
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
      projectId: req.body.projectId,
    });
    await newTask.save();
    res.status(201).send({
      msg: "Task added",
      Task: newTask,
    });
  } catch (error) {
    console.error("Error finding project by ID:", error);
    return res.status(404).send({ error: "id not found" });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const Tasks = await Task.find({});
    if (!Tasks.length) {
      return res.status(404).send({
        mes: "add new Task to see the Tasks",
      });
    }
    res.status(201).send(Tasks);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const taskById = await Task.findById(id);
    res.status(201).send(taskById);
  } catch (error) {
    console.error("Error finding project by ID:", error);
    return res.status(404).send({ error: "taskById not found" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updateProject = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send({
      message: "task updated successfully",
      Project: updateProject,
    });
  } catch (error) {
    console.error("Error updating task by ID:", error);
    return res.status(404).send({ error: "task not found" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await Task.findByIdAndDelete(id);
    res.status(201).json({
      message: "Task deleted successfully",
      Task: deleteTask,
    });
  } catch (error) {
    console.error("Error deleting Project by ID:", error);
    return res.status(404).json({ error: "Project not found" });
  }
};
