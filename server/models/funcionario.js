var mongoose = require('mongoose');

var funcionarioSchema = mongoose.Schema({
	nombre:String,
	apellido:String,
	rut:String,
	cargo:String,
	telefono:String,
	email:String
},{ versionKey: false });

module.exports = mongoose.model('Funcionario',funcionarioSchema);
