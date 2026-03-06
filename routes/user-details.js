const express = require("express");
const routers = express.Router();

const controller = require("../controllers/user-details");

routers.get("/:id", controller.get);
routers.put("/", controller.put);
routers.post("/", controller.post);
module.exports = routers;
