const { where } = require("sequelize");
const { Matter, Sequelize, sequelize } = require("../models");
const { Notes } = require("../models");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
module.exports = {
  get: async (req, res) => {
    // const { subtopic } = req.body;

    const { id } = req.params;
    const getData = await Notes.findAll({
      where: {
        UserDetailId: id,
      },
      attributes: [[sequelize.fn("DISTINCT", sequelize.col("topic")), "topic"]],
    });
    console.log(getData);

    res.json({ getData });
  },
};
