import project from "../models/projectModel.js";

export const createNewProject = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "name for the project is required" });
  }
  const newProject = new project({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
  });
  await newProject.save();
  res.status(201).send({
    msg: "project added",
    project: newProject,
  });
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await project.find({});
    if (!projects.length) {
      return res.status(404).send({
        mes: "add new project to see the projects",
      });
    }
    res.status(201).send(projects);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const projectById = await project.findById(id);
    if (!projectById) {
      return res.status(404).send({ error: "project not found" });
    }
    res.status(201).send(projectById);
  } catch (error) {
    console.error("Error finding project by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateProject = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "name for the project is required" });
  }
  try {
    const { id } = req.params;
    const updateProject = await project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateProject) {
      return res.status(404).send({ error: "Project not found" });
    }
    res.status(201).send({
      message: "Project updated successfully",
      Project: updateProject,
    });
  } catch (error) {
    console.error("Error updating Project by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProject = await project.findByIdAndDelete(id);
    if (!deleteProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(201).json({
      message: "Project deleted successfully",
      Project: deleteProject,
    });
  } catch (error) {
    console.error("Error deleting Project by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};
