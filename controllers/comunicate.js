'use strict'
var mongoose = require('mongoose');
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var Comunicate = require('../models/comunicate.js');
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
//Registro de usuario
function saveComunicate(req,res){
	var params = req.body;
	var comunicate = new Comunicate ();
	var number;

	

	//si existen los datos 
	if( params.date_comunicate  && 
		params.title_comunicate  && 
		params.description_comunicate 
		) {
		//seteamos variables
		
		comunicate.date_comunicate = params.date_comunicate;
		comunicate.title_comunicate = params.title_comunicate;
		comunicate.description_comunicate = params.description_comunicate;
		comunicate.image = params.image;
		comunicate.activate_comunicate = params.activate_comunicate;


		
		Comunicate.find().exec((err,comunicates) => {
				if(err) return res.status(500).send({message:'Error en la peticion de usuarios'});
				if(comunicates) {				
							

							number = comunicates.length +1;

							
							comunicate.number = number;

							console.log(comunicate.number);

							

						}
			});

console.log(comunicate.number);
		


		
		comunicate.save((err,comunitateStored) => {
								
			if (err) return res.status(500).send({message:'Error al guardar el comunicado'});
			if(comunitateStored){
				
				res.status(200).send({comunicate: comunitateStored});
			}else {
				res.status(404).send({message: 'No se ha registrado el comunicado'});
			}
		});
						
		
		

	} else {

		res.status(200).send({

			message:'Envia todos los campos necesarios !!'
		});
	}
 }

//metodo Agregar tutores


function getComunicate(req,res){
	var comunicateId = req.params.id;
	
	Comunicate.findById(comunicateId,(err,comunicate) => {
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!comunicate) return res.status(404).send({
			message: 'El usuario no existe'
		});

		return res.status(200).send({comunicate})
	});
}



//Devolver Listado de usuarios paginados

function getComunicates(req,res){
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var itemsPerPage = 100;

	Comunicate.find().sort({date_comunicate:-1}).paginate(page,itemsPerPage,(err,comunicates,total)=>{
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!comunicates) return res.status(404).send({
			message: 'No hay Comunicados disponibles'
		});

		return res.status(200).send({
			comunicates,
			total,
			pages: Math.ceil(total/itemsPerPage)				
		});


	});
}
//Devolver Listado de usuarios paginados



//Actualizar datos de usuario

function updateComunicate(req,res){
	var comunicateId = req.params.id;
	var update = req.body;

	//borrar password
	
	Comunicate.findByIdAndUpdate(comunicateId,update,{new:true},(err, ComunicateUpdated) => {
		if(err) return res.status(500).send({message:'Error de la peticion'});
		if(!ComunicateUpdated) return res.status(404).send({message:'No se ha podido actualizar el usuario'});

		return res.status(200).send({Comunicate: ComunicateUpdated});

	});
	
}


//subir imagen

function uploadImage (req, res){
	var comunicateId = req.params.id;
	

	if(req.files){
		var file_path = req.files.image.path;
	
		var file_split = file_path.split('/');
		
		var file_name = file_split[2];
		
		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];
	


		if(file_ext=='png' ||file_ext=='PNG' || file_ext == 'jpg' || file_ext == 'jpeg'|| file_ext == 'gif'){
			//Actualizar documento de usuario logueago

			Comunicate.findByIdAndUpdate(comunicateId,{image:file_name},{new:true},(err,ComunicateUpdated)=>{
				
				if(err) return res.status(500).send({message:'Error de la peticion'});
				if(!ComunicateUpdated) return res.status(404).send({message:'No se ha podido actualizar el usuario'});

				return res.status(200).send({comunicate: ComunicateUpdated});

			});
		}else {
			//elimninar archivo
			return removeFilesOfUploads(res,file_path,'La extension no es valida');

		}


	}
	else {
		return res.status(200).send({message:'No se han subido archivos'});
	}

}

function removeFilesOfUploads(res,file_path,message){
//eliminar archivo
	fs.unlink(file_path,(err) => {
		return res.status(200).send({message: message});
	});

}
function getImageFile(req, res){
	var image_file = req.params.imageFile;
	

	var path_file = './uploads/comunicates/'+image_file;

	fs.exists(path_file,(exists)=> {
		if(exists){
			res.sendFile(path.resolve(path_file));

		}else {
			res.status(200).send({message:'No existe la imagen'});
		}

	});

}


function deleteComunicate(req, res){
		var comunicateId = req.params.id;

		Comunicate.findByIdAndRemove(comunicateId, (err, comunicateRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!comunicateRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				comunicate: comunicateRemoved
			});
		});
	}


 module.exports = {
 	home,
 	pruebas,
 	saveComunicate,
 	getComunicates,
 	updateComunicate,
 	uploadImage,
 	getImageFile,
 	getComunicate,
 	deleteComunicate
 	

 }
