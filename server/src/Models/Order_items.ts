import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/E-commerce");

const orderItemsModel = mongoose.model(
  "order_items",
  new Schema({
    productID: String,
    orderID: String,
    quantity: Number,
    total: Number,
  })
);

export default orderItemsModel;
