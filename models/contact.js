'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = Schema({
	name: String,
	email: String,
	phone: String,
	subject:String,
	message: String,
	
});

module.exports = mongoose.model('Contact', ContactSchema);
	