const { Sequelize, Datatypes } = require("sequelize");
module.exports = (Sequelize, Datatypes) => {
  const Notes = Sequelize.define("Notes", {
    id: {
      type: Datatypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    topic: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    visibility: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    heading: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    notes: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    imgsrc: {
      type: Datatypes.STRING,
      allowNull: true,
    },
  });
  return Notes;
};
