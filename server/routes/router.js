var express = require('express');
var router = express.Router();

var Planilla = require('../controllers/planilla');
var Funcionario = require('../controllers/funcionario');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods",'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post("/crearFuncionario",Funcionario.crearFuncionario);
router.get("/obtenerFuncionarios",Funcionario.obtenerFuncionarios);
router.put("/modificarFuncionario",Funcionario.modificarFuncionario);
router.delete("/eliminarFuncionario",Funcionario.eliminarFuncionario);

router.post("/crearPlanilla",Planilla.crearPlanilla);
router.get("/obtenerPlanilla",Planilla.obtenerPlanilla);
router.get("/obtenerPlanillas",Planilla.obtenerPlanillas)
router.get("/obtenerFecha",Planilla.obtenerFecha);
router.put("/modificarPlanilla",Planilla.modificarPlanilla);
router.delete("/eliminarPlanilla",Planilla.eliminarPlanilla);

module.exports = router;
