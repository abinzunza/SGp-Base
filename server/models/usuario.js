var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
	username:String,
	nombre:String,
	apellido:String,
	password:String,
	rut:String,
	telefono:String,
	email:String	
},{ versionKey: false });

module.exports = mongoose.model('Usuario',usuarioSchema);