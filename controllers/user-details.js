const { where } = require("sequelize");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  get: async (req, res) => {
    const getPost = await UserDetails.findAll();

    res.json(getPost);
  },

  post: async (req, res) => {
    const { username, email, password, tutor } = req.body;
    try {
      const user = await UserDetails.findAll({
        where: {
          email: email,
        },
      });

      if (user[0]?.id) {
        console.log("already exists");

        return res.status(400);
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const accessToken = jwt.sign(
          { email: email },
          "69a6ffae-6664-4dbb-8e5f-cd62ab6c98e6",
        );

        await UserDetails.create({
          id: v4(),
          username: username,
          email: email,
          password: hashedPassword,
        });
        console.log("created");
        res.status(200).json({ accessToken });
      }
    } catch (error) {
      console.log(error);
    }
  },

  put: async (req, res) => {
    const { bio } = req.body;

    try {
      const currentBio = await UserDetails.findAll();
      await UserDetails.update(
        { bio: bio },
        {
          where: {
            bio: currentBio[0]?.bio,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  },
};
