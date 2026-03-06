const { Sequelize, Datatypes } = require("sequelize");

module.exports = (Sequelize, Datatypes) => {
  const Exercise = Sequelize.define("exercise", {
    id: {
      type: Datatypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    noteId: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    question: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    a: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    b: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    c: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    d: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    correctAns: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    imgsrc: {
      type: Datatypes.STRING,
      allowNull: true,
    },
  });
  return Exercise;
};
