import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/E-commerce");

const OrderModel = mongoose.model(
  "orders",
  new Schema({
    userID: String,
    products: [
      {
        productID: String,
        quantity: { type: Number, default: 1 },
      },
    ],
    date: { type: Date, default: Date.now },
    totalPrice: Number,
    status: { type: String, default: "pending" },
    address: { type: Object, required: true },
  })
);

export default OrderModel;
