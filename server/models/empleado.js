var mongoose = require('mongoose');

var funcionarioSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	nombre:String,
	cargo:String
},{ versionKey: false });

module.exports = mongoose.model('Funcionario',funcionarioSchema);

