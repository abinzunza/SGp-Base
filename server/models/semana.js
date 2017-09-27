var mongoose = require('mongoose');

var turnoSchema = mongoose.Schema({
	empleado:{type: mongoose.Schema.Types.ObjectId}
},{ versionKey: false });

var diaSchema = mongoose.Schema({
	fecha:Date,
	turnos:[turnoSchema]
},{ versionKey: false });

var planillaSchema = mongoose.Schema({
	fecha_inicio:Date,
	fecha_fin:Date,
	dias: [diaSchema]	
},{ versionKey: false });

module.exports = mongoose.model('Planilla',planillaSchema);