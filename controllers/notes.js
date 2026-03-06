const { where } = require("sequelize");
const { Matter, Sequelize, sequelize } = require("../models");
const { Notes } = require("../models");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
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
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    const { topic, tutorId } = req.params;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 1;

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
    res.json({ getData });
  },
};
