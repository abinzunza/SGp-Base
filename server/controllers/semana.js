var Planilla = require("../models/planilla");

exports.crearPlanilla = ((req,res)=>{
    Planilla.create(req.body,
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            res.status(207).send("Error");
        }
    });
});

exports.modificarPlanilla = ((req,res)=>{
    Planilla.replaceOne({
        fecha_inicio: {"$gte": new Date(req.body.fecha_inicio), "$lt": new Date(req.body.fecha_fin)}
    },
    req.body,
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            res.status(207).send("Error");
        }
    });
});

exports.eliminarPlanilla = ((req,res)=>{
    Planilla.deleteOne({
        fecha_inicio: {"$gte": new Date(req.query.fechaInicial), "$lt": new Date(req.query.fechaFinal)}
    },
    (err,docs)=>{
        if(!err){
            res.status(200).send("Listo")
        }else{
            res.status(207).send("Error");
        }
    });
});

exports.obtenerPlanilla = ((req,res)=>{
    Planilla.findOne({
        fecha_inicio: {"$gte": new Date(req.query.fechaInicial), "$lt": new Date(req.query.fechaFinal)}
    },
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            res.status(404).send("Error");
        }
    });
});

exports.obtenerPlanillas = ((req,res)=>{
    Planilla.find(null,
    (err,docs)=>{
        if(!err){
            res.json(docs);
        }else{
            res.status(404).send("Error");
        }
    });
});

exports.obtenerFecha = ((req,res)=>{
    Planilla.findOne(null,null,{sort:{'fecha_inicio':-1}},(err,ultimaPlanilla)=>{
        if(!err){
            if(!ultimaPlanilla){
                let fecha_inicio = new Date();
                fecha_inicio.setDate(fecha_inicio.getDate()-1);
                fecha_inicio.setDate(fecha_inicio.getDate()-fecha_inicio.getDay()+1);
                let fecha_fin = new Date(fecha_inicio);
                fecha_fin.setDate(fecha_fin.getDate()+6);
                res.json({fecha_inicio:fecha_inicio,fecha_fin:fecha_fin});
            }
            else{
                ultimaPlanilla.fecha_inicio.setDate(ultimaPlanilla.fecha_inicio.getDate() + 7);
                ultimaPlanilla.fecha_fin.setDate(ultimaPlanilla.fecha_fin.getDate() + 7);
                res.json({fecha_inicio:ultimaPlanilla.fecha_inicio,fecha_fin:ultimaPlanilla.fecha_fin});
            }
        }
        else{
            res.status(207).send("Error");
        }
    });
});
