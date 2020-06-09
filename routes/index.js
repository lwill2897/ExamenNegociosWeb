
const express = require("express");
const routes = express.Router();

const proyectosController = require("../Controllers/proyectosController");

module.exports = function () {
  routes.get("/", proyectosController.home);

  routes.post("/nuevo_proyecto", proyectosController.nuevoProyecto);

  return routes;
};
