const { User } = require("../models");
const { ERRORS } = require("../utils/errors");
module.exports = {
  get: async (req, res) => {
    try {
      const getPost = await User.findAll();

      res.status(200).json({ getPost });
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },
  post: async (req, res) => {
    const Post = req.body;
    try {
      await User.create(Post);
      res.status(200).json({ msg: ERRORS.OK });
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },
};
