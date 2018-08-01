'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	type_catalog:String,
	clv: String,
	description:String,
	
});

module.exports = mongoose.model('Catalog', UserSchema);
	