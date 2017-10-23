var Funcionario = require("../models/funcionario");

exports.crearFuncionario = ((req,res)=>
    Funcionario.create(req.body,
    (err,docs)=>{
        if(!err){
            res.status(200).send(docs)
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    }));

exports.obtenerFuncionarios = ((req,res)=>
    Funcionario.find(null,
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            console.log(err);
            res.status(404).send("Error");
        }
    }));

exports.modificarFuncionario = ((req,res)=>
    Funcionario.replaceOne({
        _id: req.body._id
    },
    req.body,
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    }));

exports.eliminarFuncionario = ((req,res)=>
    Funcionario.deleteOne({
        _id: req.query._id
    },
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    }));
