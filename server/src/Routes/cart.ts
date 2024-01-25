import CartModel from "../Models/Cart";
import express from "express";
import bodyParser from "body-parser";
import ProductModel from "../Models/Product";
import { verifyAdmin, verifyAuth } from "./verifyToken";
const cartRoute = express.Router();
cartRoute.use(bodyParser.json());

cartRoute.post("/", async (req, res) => {
  try {
    const { userID, productID, quantity } = req.body;
    const cart = await CartModel.findOne({ userID });
    if (cart) {
      const existingProduct = cart.products.find(
        (item) => item.productID === productID
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({ productID, quantity });
      }
      await cart.save();
      res.send(cart);
    } else {
      const create = await CartModel.create({
        userID,
        products: [{ productID, quantity }],
      });
      res.status(200).send(create);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
cartRoute.get("/:id", verifyAuth, async (req, res) => {
  try {
    const user = req.params.id;
    const find = await CartModel.findOne({ userID: user });
    const ids = find?.products.map((e) => e.productID);
    const prods = await ProductModel.find({ _id: ids });
    res.send(prods);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete all fro production
cartRoute.delete("/", async (req, res) => {
  const destroy = await CartModel.deleteMany({});
  res.send("all deleted");
});

export default cartRoute;
