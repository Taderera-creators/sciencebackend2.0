const express = require("express");
const routers = express.Router();

const controller = require("../controllers/notes");
const validateToken = require("../middleware/postMiddleware");

routers.get("/:topic/:tutorId", controller.get);
routers.post("/", validateToken, controller.post);
routers.post("/", controller.post);
module.exports = routers;
