var Empleado = require("../models/empleado");

exports.obtenerEmpleados=((req,res)=>
    Empleado.find(null,
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            res.status(404).send("Error");
        }
    })
);