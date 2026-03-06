const { User } = require("../models");
module.exports = {
  get: async (req, res) => {
    const getPost = await User.findAll();

    res.json(getPost);
  },
  post: async (req, res) => {
    const Post = req.body;
    await User.create(Post);
    res.json(Post);
  },
};
