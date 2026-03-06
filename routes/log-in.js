const express = require("express");
const routers = express.Router();

const app = express();
app.use(express.json());

const Controller = require("../controllers/log-in");

routers.post("/", Controller.post);

module.exports = routers;
