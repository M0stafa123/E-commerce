import mongoose, { Schema } from "mongoose";
mongoose.connect("mongodb://0.0.0.0:27017/E-commerce");

const CartModel = mongoose.model(
  "cart",
  new Schema(
    {
      userID: { type: String, required: true, unique: true },
      products: [
        {
          productID: String,
          quantity: { type: Number, default: 1 },
        },
      ],
    },
    { timestamps: true }
  )
);

export default CartModel;
