const express = require("express");
const routers = express.Router();

const controller = require("../controllers/tutor-details");

routers.get("/", controller.get);

module.exports = routers;
