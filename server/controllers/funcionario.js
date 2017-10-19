var Funcionario = require("../models/funcionario");

exports.obtenerFuncionarios=((req,res)=>
    Funcionario.find(null,
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            res.status(404).send("Error");
        }
    })
);
