const { Sequelize, Datatypes } = require("sequelize");
const { Notes } = require("../models");
module.exports = (Sequelize, Datatypes) => {
  const UserDetails = Sequelize.define("UserDetails", {
    id: {
      type: Datatypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    bio: {
      type: Datatypes.STRING,
      allowNull: true,
    },
  });
  UserDetails.associate = (models) => {
    UserDetails.hasMany(models.Notes);
  };
  return UserDetails;
};
