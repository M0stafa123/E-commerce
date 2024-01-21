import OrderModel from "../Models/Orders";
import express from "express";
import bodyParser from "body-parser";

const orderRoute = express.Router();
orderRoute.use(bodyParser.json());

orderRoute.post("/", async (req, res) => {
  const create = await OrderModel.create(req.body);
  res.send(create);
});
orderRoute.get("/", async (req, res) => {
  const findAll = await OrderModel.find({});
  res.send(findAll);
});

// delete all fro production
orderRoute.delete("/", async (req, res) => {
  const destroy = await OrderModel.deleteMany({});
  res.send("all deleted");
});

export default orderRoute;
