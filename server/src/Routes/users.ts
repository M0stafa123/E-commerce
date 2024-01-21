import UserModel from "../Models/User";
import express from "express";
import bodyParser from "body-parser";

const userRoute = express.Router();
userRoute.use(bodyParser.json());

userRoute.get("/", async (req, res) => {
  const findAll = await UserModel.find({});
  res.send(findAll);
});

// delete all fro production
userRoute.delete("/", async (req, res) => {
  const destroy = await UserModel.deleteMany({});
  res.send("all users deleted");
});

export default userRoute;
