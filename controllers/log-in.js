const { where } = require("sequelize");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  post: async (req, res) => {
    const { Email, Password } = req.body;
    try {
      let user = await UserDetails.findOne({
        Email,
      });
      if (!user) {
        console.log("error");
        return res.status(400);
      } else {
        await bcrypt.compare(Password, user.Password).then((match) => {
          if (!match) {
            console.log("error");
            return res.status(400);
          } else {
            console.log("done");
            const accessToken = jwt.sign(
              { Email },
              "69a6ffae-6664-4dbb-8e5f-cd62ab6c98e6",
            );
            return res.status(200).json({ accessToken });
          }
        });

        // await LogIn.create({ Email, Password });
      }
    } catch (error) {
      res.status(500);
    }
  },
};
