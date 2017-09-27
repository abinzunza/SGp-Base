var mongoose = require('mongoose');

var empleadoSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	nombre:String,
	cargo:String
},{ versionKey: false });

module.exports = mongoose.model('Empleado',empleadoSchema);

