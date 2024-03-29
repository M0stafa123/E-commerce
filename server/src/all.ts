import express from "express";

export const all = express.Router();

all.get("/", (req, res) => {
  res.send({
    users: {
      "/users": ["Delete  'will delete all users for development'"],
      "/users/find": ["GET", "Will get all users", "FOR ADMINS ONLY"],
      "/users/find/:id": [
        "GET",
        "will get one user by id",
        "FOR AUTHENTICATED USERS AND ADMIN",
      ],
      "/users/:id": {
        PUT: ["will update user info", "FOR AUTHENTICATED USERS ONLY"],
        DELETE: ["will delete user by id", "FOR AUTHENTICATED USERS ONLY"],
      },
      fields: {
        username: ["string", "unique", "required"],
        password: ["string", "required"],
        email: ["string", "unique", "required"],
        firstName: ["string"],
        lastName: ["string"],
        address: ["string"],
        phone: ["number"],
        role: ["string", "is set by the admin", "user is the default role"],
      },
    },
    auth: {
      "/auth/register": "POST",
      "/auth/login": ["POST", "will return authentcation token"],
    },
    products: {
      "products/find": ["GET", "gets all products", "any one can see "],
      "products/find/:id": ["GET", "get one product", "any one can see "],
      "products/": ["POST", "create a new product", "admins only"],
      "products/:id": ["PUT", "DELETE", "update or delete a product", "admins only"],
      fields: {
        title: ["String", "required", "unique"],
        desc: ["String", "required"],
        img: ["String", "required"],
        category: ["Array", "required"],
        size: ["String"],
        color: ["String"],
        price: "Number",
        stock: "Number",
      },
      "products/search?keyword='search word'": ["GET"],
      "products/search?category='category'": ["GET"],
      filtering: "coming soon",
    },
    cart: {
      "cart/": ["POST", "creates a new cart for a user "],
      "cart/:id": ["GET", "get the user cart"],
    },
  });
});
