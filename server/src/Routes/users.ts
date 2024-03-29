import UserModel from "../Models/User";
import express from "express";
import bodyParser from "body-parser";
import { verifyAuth, verifyAdmin } from "./verifyToken";
import CryptoJS from "crypto-js";
interface USER {
  username: String;
  password: String;
  email: String;
  toJSON(): any;
}
const userRoute = express.Router();
userRoute.use(bodyParser.json());
// Get
userRoute.get("/find/:id?", verifyAdmin, async (req, res) => {
  try {
    if (req.params.id) {
      const user: USER | null = await UserModel.findById(req.params.id);
      const { password, ...others } = user?.toJSON();
      res.status(200).json(others);
    } else {
      const users: USER[] = await UserModel.find({});
      let safe: USER[] = await Promise.all(
        users.map((e) => {
          const { password, ...others } = e.toJSON();
          return others;
        })
      );
      res.status(200).json(safe);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
// Update
userRoute.put("/:id", verifyAdmin, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      "Elderstore"
    ).toString();
  }
  try {
    const updated = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).send(error);
  }
});
// Delete
userRoute.delete("/:id", verifyAuth, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete all for developent
userRoute.delete("/", async (req, res) => {
  const destroy = await UserModel.deleteMany({});
  res.send("all users deleted");
});

export default userRoute;
