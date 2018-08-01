'use strict'

var template = require('email-template').EmailTemplate,
	async = require('async'),
	nodemailer = require('nodemailer');

	var send = function (para, asunto,plantilla, form) {
		async.waterfall([
			function(next){
				var motor = new template(plantilla);
				motor.render(form,function(err,resultado){

					next(resultado.html);
				});
			},
			function(html){
				var conexion = nodemailer.createTransport({

					service : "gmail",
					auth :{
						user: "colegiolibam@gmail.com",
						pass: "ColegioLibam2000"
					}


				});
				var email = {
					from: "",
					to: para,
					subject: asunto,
					html : html 

				};

				conexion.sendMail(email);
			}


			]);
	}