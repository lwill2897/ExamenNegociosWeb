const Proyecto = require("../Models/Proyecto");

exports.home = (req, res, next) => {
  res.render("crear_proyecto");
};

exports.nuevoProyecto = (req, res, next) => {

  const { nombre } = req.body;
  const errores = [];

  if (!nombre) {
    errores.push({ error: "Esta vacio el calculo" });
  }

  if (errores.length) {
    res.render("crear_proyecto", {
      errores,
    });
  }
};
