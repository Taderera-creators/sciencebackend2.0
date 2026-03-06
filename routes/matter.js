const express = require("express");

const routers = express.Router();

const Controller = require("../controllers/matter");

routers.get("/", Controller.get);
routers.post("/", Controller.post);

module.exports = routers;
