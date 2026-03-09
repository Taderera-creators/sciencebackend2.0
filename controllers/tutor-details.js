const { where } = require("sequelize");
const { UserDetails } = require("../models");
const { Notes } = require("../models");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ERRORS } = require("../utils/errors");
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

      res.status(200).json({ getPost });
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },
};
