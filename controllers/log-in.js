const { where, EagerLoadingError } = require("sequelize");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ERRORS } = require("../utils/errors");
module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await UserDetails.findAll({
        where: {
          email,
        },
      });

      console.log(user[0]);

      if (user[0] === undefined) {
        return res.status(400).json({ msg: ERRORS.USER_NOT_FOUND });
      } else {
        await bcrypt.compare(password, user[0]?.password).then((match) => {
          if (!match) {
            return res.status(400).json({ msg: ERRORS.USER_NOT_FOUND });
          } else {
            const accessToken = jwt.sign(
              { email },
              "69a6ffae-6664-4dbb-8e5f-cd62ab6c98e6",
            );

            return res.status(200).json({ accessToken });
          }
        });

        // await LogIn.create({ email, password });
      }
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },
};
