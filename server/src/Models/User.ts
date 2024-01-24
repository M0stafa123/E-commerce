import mongoose, { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";
import validator from "validator";

const UserModel = mongoose.model(
  "users",
  new Schema(
    {
      username: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      email: {
        type: String,
        unique: true,
        required: true,
        validate: [isEmail, "Please fill a valid email address"],
      },
      firstName: { type: String },
      lastName: { type: String },
      address: { type: String },
      phone: { type: Number },
      role: { type: String, default: "user" },
    },
    { timestamps: true }
  )
);
export default UserModel;
