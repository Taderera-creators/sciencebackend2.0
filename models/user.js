const { Sequelize, DataTypes } = require("sequelize");
module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};
