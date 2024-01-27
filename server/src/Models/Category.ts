import mongoose, { Schema } from "mongoose";

const categorytModel = mongoose.model(
  "categories",
  new Schema({
    name: String,
    description: String,
  })
);

export default categorytModel;
