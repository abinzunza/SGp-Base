var mongoose = require('mongoose');

var turnoSchema = mongoose.Schema({
	actividad:String,
	empleado:String
	//inicio:Date,
	//duracion:Number,
	//empleado:mongoose.Schema.Types.ObjectId
});

var diaSchema = mongoose.Schema({
	fecha:Date,
	turnos:[turnoSchema]
});

var planillaSchema = mongoose.Schema({
	fecha_inicio:Date,
	fecha_fin:Date,
	dias: [diaSchema]	
});

module.exports = mongoose.model('Planilla',planillaSchema);
