import express from "express";
import bodyParser from "body-parser";
import ProductModel from "../Models/Product";
import { verifyAdmin } from "./verifyToken";
const productRoute = express.Router();
productRoute.use(bodyParser.json());
// search by category
productRoute.get("/search", async (req, res) => {
  const category = req.query.category;
  try {
    const searched = await ProductModel.find({
      category: category,
    });
    res.status(200).json(searched);
  } catch (error) {
    res.status(500).json(error);
  }
});
// search by keyword
productRoute.get("/search", async (req, res) => {
  const keyword = req.query.keyword;
  try {
    const searched = await ProductModel.find({
      title: { $regex: keyword },
    });
    res.status(200).json(searched);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find one or all products
productRoute.get("/find/:id?", async (req, res) => {
  try {
    if (req.params.id) {
      const find = await ProductModel.findById(req.params.id);
      res.status(200).json(find);
    } else {
      const findall = await ProductModel.find({});
      res.status(200).json(findall);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// create product
productRoute.post("/", verifyAdmin, async (req, res) => {
  try {
    const create = await ProductModel.create(req.body);
    res.status(201).json(create);
  } catch (err: any) {
    if (err.code === 11000) {
      res.status(500).json("same product is already present");
    }
  }
});
//  update product
productRoute.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const update = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(err);
  }
});
//  delete product
productRoute.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const destroy = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete all for development
productRoute.delete("/", async (req, res) => {
  const destroy = await ProductModel.deleteMany({});
  res.json("all products deleted");
});
export default productRoute;
