'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KnowsSchema = Schema({
	title:String,
	description:String,
	active_knows: Boolean
	
});

module.exports = mongoose.model('Knows', KnowsSchema);
	




