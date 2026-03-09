const express = require("express");
const routers = express.Router();

const controller = require("../controllers/user-details");
const validateToken = require("../middleware/getMiddleware");

routers.get("/", validateToken, controller.get);
routers.put("/", controller.put);
routers.post("/", controller.post);
module.exports = routers;
