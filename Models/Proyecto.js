const Sequilize = require("sequelize");

const db = require("../config/db");

const slug = require("slug");

const shortid = require("shortid");

const Proyecto = db.define(
  "proyecto",
  {
    id: {
      type: Sequilize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequilize.STRING,
    },
    url: {
      type: Sequilize.STRING,
    },
  }
);

module.exports = Proyecto;
