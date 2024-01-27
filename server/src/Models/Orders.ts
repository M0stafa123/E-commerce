import mongoose, { Schema } from "mongoose";

const OrderModel = mongoose.model(
  "orders",
  new Schema({
    userID: String,
    products: [
      {
        productID: String,
        title: String,
        price: Number,
        quantity: Number,
      },
    ],
    date: { type: Date, default: Date.now },
    totalPrice: Number,
    status: { type: String, default: "pending" },
    address: { type: Object, required: true },
  })
);

export default OrderModel;
