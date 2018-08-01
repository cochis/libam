'use strict'
var mongoose = require('mongoose');
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var template = require('email-templates').EmailTemplate;
var async = require('async');
var nodemailer = require('nodemailer');
var Contact = require('../models/contact');
var jwt = require('../services/jwt');



//MEtodo de prueba home
function home(req,res) {
 	res.status(200).send({
 		message: "holamundo"
 	});

 }


 //MEtodo de prueba prueba
function pruebas(req,res){
 	res.status(200).send({
 		message: "Accion de pruebas en el servidor"
 	});

 }


function saveAndSend(req,res){
	var params = req.body;
	var contact = new Contact ();






	
			//
			//si existen los datos 
			if( params.name && params.email  && params.subject && params.message ) {
					//seteamos variables
					contact.name = params.name;
					contact.email = params.email;
					contact.phone = params.phone;
					contact.subject = params.subject;
					contact.message = params.message;
					
					contact.save((err,contactStored) => {
					
						if (err) return res.status(500).send({message:'Error al guardar el registro del contacto'});
						if(contactStored){

								
								let transporter = nodemailer.createTransport({
									service: 'gmail',
									secure: false,
									port: 25,
									auth: {
										user:'Colegiolibam@gmail.com',
										pass:'ColegioLibam2000'

									},
									tls:{
										rejectUnauthorized: false
									}
								});
								let HelperOptions = {
									from: contact.email,
									to: 'libertadoresdeamerica28@outlook.com ,colegiolibam@gmail.com',
									subject: contact.subject,
									text:contact.message

								};	




								transporter.sendMail(HelperOptions,(error,info) => {
									if(error){
										
										res.send(error);
									}else {
										res.status(200).send({contact: contactStored,
															  message: 'Mail enviado'});
									}

								});
								
							}else {
								res.status(404).send({message: 'No se ha registrado el registro del contacto'});
							}
						});

						


									
									
									

					
			
			} else {

				res.status(200).send({message:'Envia todos los campos necesarios !!'});
			}




			//
		




	
 }



 module.exports = {
 	
 	home,
 	pruebas,
 	saveAndSend
 	

 }
