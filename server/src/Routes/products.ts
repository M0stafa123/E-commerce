import express from "express";
import bodyParser from "body-parser";
import ProductModel from "../Models/Product";
import { verifyAdmin } from "./verifyToken";
const productRoute = express.Router();
productRoute.use(bodyParser.json());
// create product
productRoute.post("/", verifyAdmin, async (req, res) => {
  const create = await ProductModel.create(req.body);
  res.status(201).json(create);
});
// find one or all products
productRoute.get("/find/:id?", async (req, res) => {
  if (req.params.id) {
    const find = await ProductModel.findById(req.params.id);
    res.status(200).json(find);
  } else {
    const findall = await ProductModel.find({});
    res.status(200).json(findall);
  }
});
//  update product
productRoute.put("/:id", verifyAdmin, async (req, res) => {
  const update = await ProductModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(update);
});
//  delete product
productRoute.delete("/:id", verifyAdmin, async (req, res) => {
  const destroy = await ProductModel.findByIdAndDelete(req.params.id);
  res.status(200).json("deleted successfully");
});

// delete all for development
productRoute.delete("/", async (req, res) => {
  const destroy = await ProductModel.deleteMany({});
  res.json("all products deleted");
});
export default productRoute;
