import mongoose, { Schema } from "mongoose";

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
