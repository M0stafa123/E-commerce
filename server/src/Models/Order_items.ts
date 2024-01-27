import mongoose, { Schema } from "mongoose";

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
