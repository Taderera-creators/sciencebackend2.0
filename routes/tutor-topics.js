const express = require("express");
const routers = express.Router();

const controller = require("../controllers/tutor-topics");
const validateToken = require("../middleware/postMiddleware");

routers.get("/:id", controller.get);
//routers.post("/", validateToken, controller.post);
//routers.post("/", controller.post);
module.exports = routers;
