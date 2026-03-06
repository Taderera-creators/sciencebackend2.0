const { Matter } = require("../models");
module.exports = {
  //always start with req
  post: async (req, res) => {
    const { tutorName, notes, subtopic, heading, tutorId } = req.body;

    await Matter.create({
      tutorId,
      tutorName,
      notes,
      subtopic,
      heading,
    });
  },

  get: async (req, res) => {
    // const { subtopic } = req.body;
    const getData = await Matter.findAll();
    res.json({ getData });
  },
};
