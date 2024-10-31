import mongoose from "mongoose";
const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
  },
});

export default mongoose.model("joke", jokeSchema);
