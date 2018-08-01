'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_libam';

exports.createToken = function (user){
	var payload = {
		sub:user._id,
		name: user.name,
		f_surname: user.f_surname  ,
		s_surname: user.s_surname   ,
		curp: user.curp   ,
		civil_status: user.civil_status   ,
		nacionality: user.nacionality   ,
		birth_state: user.birth_state   ,
		gender: user.gender   ,
		birth_date: user.birth_date   ,
		lang_m: user.lang_m   ,
		type_doc_id: user.type_doc_id   ,
		folio_doc: user.dolio_doc   ,
		email: user.email   ,
		role: user.role   ,
		image: user.image,
		iat: moment().unix(),
		exp: moment().add(30,'days').unix
	};


	return jwt.encode(payload,secret);
};