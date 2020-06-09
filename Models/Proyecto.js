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
  },
  {
    hooks: {
      beforeCreate(proyecto) {
        console.log("Antes de insertar en la base de datos");
        const url = slug(proyecto.nombre).toLowerCase();

        proyecto.url = `${url}_${shortid.generate()}`;
      },
      beforeUpdate(proyecto) {
        console.log("Antes de actualizar en la base de datos");
        const url = slug(proyecto.nombre).toLowerCase();

        proyecto.url = `${url}_${shortid.generate()}`;
      },
    },
  }
);

module.exports = Proyecto;
