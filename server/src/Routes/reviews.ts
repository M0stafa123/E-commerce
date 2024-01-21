import reviewModel from "../Models/Review";
import express from "express";
import bodyParser from "body-parser";

const reviewRoute = express.Router();
reviewRoute.use(bodyParser.json());

reviewRoute.post("/", async (req, res) => {
  const create = await reviewModel.create(req.body);
  res.send(create);
});
reviewRoute.get("/", async (req, res) => {
  const findAll = await reviewModel.find({});
  res.send(findAll);
});

// delete all fro production
reviewRoute.delete("/", async (req, res) => {
  const destroy = await reviewModel.deleteMany({});
  res.send("all deleted");
});

export default reviewRoute;
