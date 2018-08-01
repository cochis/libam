'use strict'
var mongoose = require('mongoose');
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var Knows = require('../models/knows');
var jwt = require('../services/jwt');


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

 //Registro de usuario
function saveKnows(req,res){
	var params = req.body;
	var knows = new Knows ();



	
	active_knows: Boolean	
	//si existen los datos 
	if( params.title && 
		params.description  && 
		params.active_knows 
		) {
		//seteamos variables
		knows.title = params.title;
		knows.description = params.description;
		knows.active_knows = params.active_knows;
		
		knows.save((err,knowsStored) => {
								
			if (err) return res.status(500).send({message:'Error al guardar el knows'});
			if(knowsStored){
				res.status(200).send({knows: knowsStored});
			}else {
				res.status(404).send({message: 'No se ha registrado el knows'});
			}    
		});

						
		
		

	} else {

		res.status(200).send({

			message:'Envia todos los campos necesarios !!'
		});
	}
 }


function getknow(req,res){
	var knowId = req.params.id;
	
	Knows.findById(knowId,(err,knows) => {
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!knows) return res.status(404).send({
			message: 'El knows no existe'
		});

		return res.status(200).send({knows})
	});
}


//Devolver Listado de usuarios paginados

function getKnows(req,res){
	
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var itemsPerPage = 10;

	Knows.find().sort('_id').paginate(page,itemsPerPage,(err,knows,total)=>{
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!knows) return res.status(404).send({
			message: 'No hay usuarios disponibles'
		});

		return res.status(200).send({
			knows,
			total,
			pages: Math.ceil(total/itemsPerPage)				
		});


	});
}




function UpdateKnow(req,res){
	var knowId = req.params.id;
	var update = req.body;
	
	Knows.findByIdAndUpdate(knowId,update,{new:true},(err,knowsUpdated) => {
		if(err) return res.status(500).send({message:'Error en la peticion'});
		if(!knowsUpdated) return res.status(404).send({	message: 'El knows no existe'
		});

		return res.status(200).send({know: knowsUpdated})
	});
}





function deleteKnow(req,res){
	var knowId = req.params.id;
	
	Knows.findByIdAndRemove(knowId,(err,knowsRemoved) => {
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!knowsRemoved) return res.status(404).send({
			message: 'El knows no existe'
		});

		return res.status(200).send({know: knowsRemoved})
	});
}






 module.exports = {
 	home,
 	pruebas,
 	saveKnows,
 	getknow,
 	getKnows,
 	UpdateKnow,
 	deleteKnow
 	

 }
