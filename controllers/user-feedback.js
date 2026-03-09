const { UserFeedback } = require("../models");
const { UserDetails } = require("../models");
const { v4 } = require("uuid");
const { ERRORS } = require("../utils/errors");
module.exports = {
  post: async (req, res) => {
    const email = req.name.email;

    const { feedback, topic, page, tutor } = req.body;
    try {
      const userDetails = await UserDetails.findAll({
        where: {
          email: email,
        },
      });

      await UserFeedback.create({
        id: v4(),
        feedback: feedback,
        topic,
        tutor,
        page,

        UserDetailId: userDetails[0]?.id,
      });
    } catch (error) {
      return res.status(500).json({ msg: ERRORS.SERVER_ERROR });
    }
  },
};
