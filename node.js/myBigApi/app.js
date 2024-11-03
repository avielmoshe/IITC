import express from "express";
import morgan from "morgan";
import logRequest from "./middleware/logger.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);
dotenv.config();

const uri = process.env.DB_URI;
mongoose.connect(uri).then(() => {
  console.log("connected");
});

app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

app.use("/api/project", projectRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
