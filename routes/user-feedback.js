const express = require("express");
const routers = express.Router();

const controller = require("../controllers/user-feedback");
const validateToken = require("../middleware/postMiddleware");

//routers.get("/:user", controller.get);
routers.post("/", validateToken, controller.post);
//routers.post("/", controller.post);
module.exports = routers;
