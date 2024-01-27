import mongoose, { Schema } from "mongoose";

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
