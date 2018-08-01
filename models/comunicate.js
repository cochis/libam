'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComunicateSchema = Schema({
	
	
	date_comunicate: String,
	title_comunicate: String,
	description_comunicate: String,
	image: String,
	activate_comunicate : Boolean,
	number: String
	
});

module.exports = mongoose.model('comunicate', ComunicateSchema);
	