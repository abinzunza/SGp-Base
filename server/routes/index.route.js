var express = require('express');
var mongoose = require('mongoose');

var Planilla = require('../models/semana');

var router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.post("/crearPlanilla", (req,res) => {
	planillaNueva = new Planilla({
    fecha_inicio: req.body.fecha_inicio,
    fecha_fin: req.body.fecha_fin,
    dias: req.body.dias
  });

  planillaNueva.save(res);
  res.status(202);
});

router.get("/api/planillas", (req,res) => {
  Planilla.find({}, (err,docs) => {
      if(!err)
        return docs;
  });
});

module.exports = router;