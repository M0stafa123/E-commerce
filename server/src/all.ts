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
    },
    auth: {
      "/auth/register": "POST",
      "/auth/login": ["POST", "will return authentcation token"],
    },
  });
});
