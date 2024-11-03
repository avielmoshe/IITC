import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["Admin", "Member"],
    default: "Member",
  },
});

export default mongoose.model("user", userSchema);
