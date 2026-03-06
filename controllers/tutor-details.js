const { where } = require("sequelize");
const { UserDetails } = require("../models");
const { Notes } = require("../models");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  get: async (req, res) => {
    // const { id } = req.params;
    try {
      const getPost = await UserDetails.findAll({
        include: [
          {
            model: Notes,
            as: "Notes",
            required: true,
          },
        ],
      });

      res.json(getPost);
    } catch (error) {
      console.log(error);
    }
  },
};
