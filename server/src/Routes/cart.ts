import CartModel from "../Models/Cart";
import express from "express";
import bodyParser from "body-parser";

const cartRoute = express.Router();
cartRoute.use(bodyParser.json());

cartRoute.post("/", async (req, res) => {
  const create = await CartModel.create(req.body);
  res.send(create);
});
cartRoute.get("/", async (req, res) => {
  const findAll = await CartModel.find({});
  res.send(findAll);
});

// delete all fro production
cartRoute.delete("/", async (req, res) => {
  const destroy = await CartModel.deleteMany({});
  res.send("all deleted");
});

export default cartRoute;
