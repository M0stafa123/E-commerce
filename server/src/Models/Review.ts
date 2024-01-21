import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/E-commerce");

const reviewModel = mongoose.model(
  "reviews",
  new Schema({
    userName: String,
    comment: String,
    rating: Number,
    date: String,
  })
);

export default reviewModel;
