import express from "express";
import userRoute from "./Routes/users";
import productRoute from "./Routes/products";
import cartRoute from "./Routes/cart";
import orderRoute from "./Routes/order";
import authRoute from "./Routes/auth";
import { all } from "./all";
const Router = express.Router();

Router.use("/users", userRoute);
Router.use("/products", productRoute);
Router.use("/cart", cartRoute);
Router.use("/orders", orderRoute);
Router.use("/auth", authRoute);
Router.use("/all", all);
export default Router;
