import express from "express";
import morgan from "morgan";
import logRequest from "./middleware/logger.js";
import jokesRoutes from "./routes/jokesRoute.js";
import namesRoutes from "./routes/usersRoute.js";
import productsRoutes from "./routes/productsRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import authUser from "./middleware/auth.js";

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

// app.use(authUser);
// app.use(express.static("public"));

//check if the server work
app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

//get random
app.use("/api/joke", jokesRoutes);

app.use("/api/name", namesRoutes);

app.use("/api/product", productsRoutes);

//
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
