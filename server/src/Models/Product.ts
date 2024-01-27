import mongoose, { Schema } from "mongoose";

const ProductModel = mongoose.model(
  "products",
  new Schema(
    {
      title: { type: String, required: true, unique: true },
      desc: { type: String, required: true },
      img: { type: String, required: true },
      category: { type: Array, required: true },
      size: { type: String },
      color: { type: String },
      price: Number,
      stock: Number,
    },
    { timestamps: true }
  )
);

export default ProductModel;
