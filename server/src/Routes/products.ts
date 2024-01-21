import express from "express";
import bodyParser from "body-parser";
import ProductModel from "../Models/Product";
const productRoute = express.Router();
productRoute.use(bodyParser.json());

productRoute.post("/", async (req, res) => {
  const create = await ProductModel.create(req.body);
  res.send(create);
});

productRoute.get("/", async (req, res) => {
  const find = await ProductModel.find({});
  res.send(find);
});

// delete all fro production
productRoute.delete("/", async (req, res) => {
  const destroy = await ProductModel.deleteMany({});
  res.json("all products deleted");
});
export default productRoute;
