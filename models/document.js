'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSquema = Schema({
	
	
	date: String,
	title: String,
	description: String,
	document_file: String,
	activate : Boolean,
	number: String
	
});

module.exports = mongoose.model('document', DocumentSquema);
	