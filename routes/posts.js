const express = require("express");
const { User } = require("../models");
const routers = express.Router();
const controller = require("../controllers/posts");

const app = express();
app.use(express.json());

routers.get("/", controller.get);

routers.post("/", async (req, res) => {
  const Post = req.body;
  await User.create(Post);
  res.json(Post);
});

module.exports = routers;
