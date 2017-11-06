var Usuario = require("../models/usuario");

exports.crearUsuario = ((req,res)=>{
    Usuario.create(req.query,
    (err,docs)=>{
        if(!err){
            res.status(200).send(docs)
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    });
});

exports.obtenerUsuarios = ((req,res)=>{
    Usuario.find({nombreUsuario:req.query.nombreUsuario},
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            console.log(err);
            res.status(404).send("Error");
        }
    })
});

/*
exports.modificarUsuario = ((req,res)=>
    Usuario.replaceOne({
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
    })
);

exports.eliminarUsuario = ((req,res)=>
    Usuario.deleteOne({
        _id: req.query._id
    },
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            console.log(err);
            res.status(207).send("Error");
        }
    })
);
*/