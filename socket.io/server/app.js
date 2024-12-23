const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = 3000;
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const uri = process.env.DB_URI;
if (!uri) {
  console.error("Error: Missing DB_URI in .env file");
}

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

io.on("connection", (socket) => {
  console.log("A client connected:", socket.id);

  socket.on("join", (username) => {
    console.log(`${username} joined the chat`);
    socket.username = username;
    socket.broadcast.emit("message", {
      by: "System",
      text: `${socket.username} has joined the chat`,
    });
  });

  socket.on("message", (messageText) => {
    console.log(`Message from ${socket.username}:`, messageText);
    io.emit("message", {
      by: socket.username,
      text: messageText,
    });
  });

  socket.on("user-typing-message", () => {
    console.log(`${socket.username} is typing...`);
    socket.broadcast.emit("user-typing-message", socket.username);
  });

  socket.on("disconnect", () => {
    if (!socket.username) return;
    console.log(`A client disconnected: ${socket.id}`);
    io.emit("message", {
      by: "System",
      text: `${socket.username} has left the chat`,
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
