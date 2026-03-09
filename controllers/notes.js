const { where } = require("sequelize");
const { Matter, Sequelize, sequelize } = require("../models");
const { Notes } = require("../models");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
const { ERRORS } = require("../utils/errors");
module.exports = {
  //always start with req

  post: async (req, res) => {
    const email = req.name.email;

    const { topic, visibility, heading, notes, imgsrc } = req.body;
    try {
      const userDetails = await UserDetails.findAll({
        where: {
          email: email,
        },
      });

      await Notes.create({
        id: v4(),
        topic: topic,
        visibility: visibility,
        heading: heading,
        notes: notes,
        imgsrc: imgsrc,
        UserDetailId: userDetails[0]?.id,
      });
      res.status(200).json({ msg: ERRORS.OK });
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },

  get: async (req, res) => {
    const { topic, tutorId } = req.params;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;

    try {
      const totalPages = await Notes.count({
        where: {
          topic: topic,
        },
      });

      const notes = await Notes.findAll({
        limit: limit,
        offset: page * limit,
        where: {
          UserDetailId: tutorId,
          topic: topic,
        },
      });

      const getData = {
        page: page + 1,
        totalPages,
        notes,
      };
      res.status(200).json({ getData });
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },
};
