const { Sequelize, Datatypes } = require("sequelize");
module.exports = (Sequelize, Datatypes) => {
  const UserFeedback = Sequelize.define("UserFeedback", {
    id: {
      type: Datatypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    feedback: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    topic: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    tutor: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    page: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });
  return UserFeedback;
};
