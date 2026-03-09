const { where } = require("sequelize");
const { Matter, Sequelize, sequelize } = require("../models");
const { Notes } = require("../models");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
const { ERRORS } = require("../utils/errors");
module.exports = {
  get: async (req, res) => {
    // const { subtopic } = req.body;
    try {
      const { id } = req.params;
      const getData = await Notes.findAll({
        where: {
          UserDetailId: id,
        },
        attributes: [
          [sequelize.fn("DISTINCT", sequelize.col("topic")), "topic"],
        ],
      });

      res.status(200).json({ getData });
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },
};
