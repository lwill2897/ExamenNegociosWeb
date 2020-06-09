const Sequilize = require("sequelize");

const db = require("../config/db");

const slug = require("slug");

const shortid = require("shortid");

const Proyecto = db.define(
  "proyecto",
  {
    MONTO: {
      type: Sequilize.INTEGER,
    },
    CANTIDAD: {
        type: Sequilize.INTEGER,
      },
    url: {
      type: Sequilize.STRING,
    },
  },
);

module.exports = Proyecto;
