const Proyecto = require("../models/Proyecto");

exports.home = (req, res, next) => {
  res.render("crear_proyecto");
};

exports.nuevoProyecto = (req, res, next) => {

  const { nombre } = req.body;
  const errores = [];

  if (!nombre) {
    errores.push({ error: "El nombre del proyecto no puede ser vacío." });
  }

  if (errores.length) {
    res.render("crear_proyecto", {
      errores,
    });
  } else {
    res.send("Insertado en la BD");
  }
};
