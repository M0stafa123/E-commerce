import orderItemsModel from "../Models/Order_items";
import express from "express";
import bodyParser from "body-parser";

const orderItemsRoute = express.Router();
orderItemsRoute.use(bodyParser.json());

orderItemsRoute.post("/", async (req, res) => {
  const create = await orderItemsModel.create(req.body);
  res.send(create);
});
orderItemsRoute.get("/", async (req, res) => {
  const findAll = await orderItemsModel.find({});
  res.send(findAll);
});

// delete all fro production
orderItemsRoute.delete("/", async (req, res) => {
  const destroy = await orderItemsModel.deleteMany({});
  res.send("all deleted");
});

export default orderItemsRoute;
