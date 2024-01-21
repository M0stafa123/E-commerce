import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/E-commerce");

const categorytModel = mongoose.model(
  "categories",
  new Schema({
    name: String,
    description: String,
  })
);

export default categorytModel;
