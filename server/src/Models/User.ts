import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/E-commerce");
const UserModel = mongoose.model(
  "users",
  new Schema(
    {
      username: { type: String, unique: true, required: true },
      password: { type: String, unique: true, required: true },
      email: { type: String, unique: true, required: true },
      firstName: { type: String },
      lastName: { type: String },
      address: { type: String },
      phone: { type: Number },
      role: { type: String, enum: ["user", "admin", "supervisor"], default: "user" },
    },
    { timestamps: true }
  )
);
export default UserModel;
