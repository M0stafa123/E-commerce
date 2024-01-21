import express from "express";
import bodyParser from "body-parser";
import UserModel from "../Models/User";
import CryptoJS from "crypto-js";
const authRoute = express.Router();
authRoute.use(bodyParser.json());
// REGISTER

authRoute.post("/register", async (req, res) => {
  let err;
  try {
    const newUser = await UserModel.create({
      username: req.body.username,
      password: CryptoJS.AES.encrypt(req.body.password, "Elderstore"),
      email: req.body.email,
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    if (error.code === 11000) {
      err = `${Object.keys(error.keyValue)[0]} is already in use`;
    } else {
      err = `${Object.keys(error.errors)[0]} is required`;
    }
    console.log(err);
    res.status(500).json(error);
  }
});
// LOGIN
authRoute.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (user) {
      const hash = CryptoJS.AES.decrypt(user.password, "Elderstore");
      const pass = hash.toString(CryptoJS.enc.Utf8);
      if (pass !== req.body.password) {
        res.status(401).json("wrong password");
      } else {
        res.send(user);
      }
    } else {
      res.status(401).json("wrong username");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
export default authRoute;
