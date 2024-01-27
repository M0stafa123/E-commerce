import express from "express";
import bodyParser from "body-parser";
import UserModel from "../Models/User";
import CryptoJS from "crypto-js";
import jwt, { Secret } from "jsonwebtoken";
const authRoute = express.Router();

authRoute.use(bodyParser.json());
// REGISTER
authRoute.post("/register", async (req, res) => {
  let err;
  try {
    const newUser = await UserModel.create({
      username: req.body.username,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET as string),
      email: req.body.email,
      role: req.body.role,
    });
    res.status(201).json("Welcome to Elder Store");
  } catch (error: any) {
    if (error.code === 11000) {
      err = `${Object.keys(error.keyValue)[0]} is already in use`;
    } else {
      err = `${Object.keys(error.errors)[0]} is required`;
    }
    res.status(500).json(err);
  }
});
// LOGIN
authRoute.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (user) {
      const hash = CryptoJS.AES.decrypt(user.password, process.env.SECRET as string);
      const pass = hash.toString(CryptoJS.enc.Utf8);
      if (pass !== req.body.password) {
        res.status(401).json("Wrong username or password");
      } else {
        const { password, ...other } = user.toJSON();
        const getToken = jwt.sign(
          {
            id: user._id,
            role: user.role,
          },
          process.env.JWT as Secret,
          { expiresIn: "3d" }
        );
        res.status(200).json({ ...other, getToken });
      }
    } else {
      res.status(401).json("Wrong username or password");
    }
  } catch (error) {
    console.error("Error in authentication:", error);
    res.status(500).json(error);
  }
});
export default authRoute;
