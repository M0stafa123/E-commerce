import OrderModel from "../Models/Orders";
import express from "express";
import bodyParser from "body-parser";
import CartModel from "../Models/Cart";
import ProductModel from "../Models/Product";
import { verifyAdmin, verifyAuth } from "./verifyToken";
const orderRoute = express.Router();
orderRoute.use(bodyParser.json());

orderRoute.post("/:id", verifyAuth, async (req, res) => {
  try {
    const cart = await CartModel.findOne({
      userID: req.params.id,
    });
    if (cart) {
      const ids = cart.products.map((prod) => prod.productID);
      const prods = await ProductModel.find({ _id: ids });
      const orderProducts = prods.map((product) => ({
        productID: product.id,
        title: product.title,
        price: product.price,
        quantity: cart.products.find((item) => item.productID === product.id)?.quantity,
      }));
      const create = await OrderModel.create({
        userID: req.params.id,
        products: orderProducts,
        address: req.body.address,
      });
      res.status(200).send(create);
    } else {
      res.status(500).send("there is no cart");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
// get user's order
orderRoute.get("/:id", verifyAuth, async (req, res) => {
  try {
    const find = await OrderModel.find({
      userID: req.params.id,
    });
    res.status(200).json(find);
  } catch (err) {
    res.status(500).send(err);
  }
});
// get all users
orderRoute.get("/", verifyAdmin, async (req, res) => {
  try {
    const findAll = await OrderModel.find();
    res.status(200).send(findAll);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete all fro development
orderRoute.delete("/", async (req, res) => {
  try {
    const destroy = await OrderModel.deleteMany({});
    res.status(200).send("all deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});

export default orderRoute;
