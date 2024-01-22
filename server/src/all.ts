import express from "express";

export const all = express.Router();

all.get("/", (req, res) => {
  res.send({
    users: {
      "/user": ["GET", "Delete  'will delete all users for development'"],
    },
    auth: {
      "/auth/register": "POST",
      "/auth/login": "POST",
    },
  });
});
