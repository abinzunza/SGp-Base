var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
	nombre:String,
	apellido:String,
	contrasena:String,
	nombreUsuario:String	
},{ versionKey: false });

module.exports = mongoose.model('Usuario',usuarioSchema);