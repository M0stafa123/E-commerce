import categorytModel from "../Models/Category";
import express from "express";
import bodyParser from "body-parser";

const categoryRoute = express.Router();
categoryRoute.use(bodyParser.json());

categoryRoute.post("/", async (req, res) => {
  const create = await categorytModel.create(req.body);
  res.send(create);
});
categoryRoute.get("/", async (req, res) => {
  const findAll = await categorytModel.find({});
  res.send(findAll);
});

// delete all fro production
categoryRoute.delete("/", async (req, res) => {
  const destroy = await categorytModel.deleteMany({});
  res.send("all deleted");
});

export default categoryRoute;
