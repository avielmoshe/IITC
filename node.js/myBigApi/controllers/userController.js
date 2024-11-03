import user from "../models/userModel.js";

export const createNewUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res
        .status(400)
        .json({ error: "name and email for the user is required" });
    }
    const newUser = new user({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    });
    await newUser.save();
    res.status(201).send({
      msg: "user added",
      newUser: newUser,
    });
  } catch (error) {
    console.error("Error finding project by ID:", error);
    return res.status(404).send({ error: "server error" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await user.find({});
    if (!users.length) {
      return res.status(404).send({
        mes: "add new Task to see the users",
      });
    }
    res.status(201).send(users);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await user.findById(id);
    res.status(201).send(userById);
  } catch (error) {
    console.error("Error finding user by ID:", error);
    return res.status(404).send({ error: "userById not found" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).send({
      message: "user updated successfully",
      user: updateUser,
    });
  } catch (error) {
    console.error("Error updating updateUser by ID:", error);
    return res.status(404).send({ error: "User not found" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await user.findByIdAndDelete(id);
    res.status(201).json({
      message: "User deleted successfully",
      User: deleteUser,
    });
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    return res.status(404).json({ error: "user not found" });
  }
};
