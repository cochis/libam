'use strict'
var mongoose = require('mongoose');
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var Document = require('../models/Document');
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
function saveDocument(req,res){
	var params = req.body;
	var document = new Document ();
	var number;

	console.log(params);
	//si existen los datos 
	if( params.date  && 
		params.title &&
		params.description &&
		params.document_file 
		) {
		//seteamos variables
		
		document.date = params.date;
		document.title = params.title;
		document.descriptione = params.description;
		document.document_file = params.document_file;
		document.activate = true;
		document.number = 2;

		

		document.save((err,documentStored) => {
								
			if (err) return res.status(500).send({message:'Error al guardar el documento'});
			if(documentStored){
				
				res.status(200).send({document: documentStored});
			}else {
				res.status(404).send({message: 'No se ha registrado el documento'});
			}
		});
						
		
		

	} else {

		res.status(200).send({

			message:'Envia todos los campos necesarios !!'
		});
	}
 }

//metodo Agregar tutores


function getDocument(req,res){
	var documentid = req.params.id;
	
	Document.findById(documentid,(err,document) => {
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!document) return res.status(404).send({
			message: 'El Documwnto no existe'
		});

		return res.status(200).send({document})
	});
}



//Devolver Listado de usuarios paginados

function getDocuments(req,res){
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var itemsPerPage = 100;

	Document.find().paginate(page,itemsPerPage,(err,document,total)=>{
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!document) return res.status(404).send({
			message: 'No hay Documentos disponibles'
		});
			
		return res.status(200).send({
			document,
			total,
			pages: Math.ceil(total/itemsPerPage)				
		});


	});
}



//Devolver Listado de usuarios paginados



//Actualizar datos de usuario

function updateDocument(req,res){
	var documentid = req.params.id;
	var update = req.body;

	//borrar password
	
	Document.findByIdAndUpdate(documentid,update,{new:true},(err, DocumentUpdated) => {
		if(err) return res.status(500).send({message:'Error de la peticion'});
		if(!DocumentUpdated) return res.status(404).send({message:'No se ha podido actualizar el usuario'});

		return res.status(200).send({Document: DocumentUpdated});

	});
	
}


//subir imagen

function uploadImage (req, res){
	var documentid = req.params.id;
	

	if(req.files){
		var file_path = req.files.document_file.path;
	
		var file_split = file_path.split('/');
		
		var file_name = file_split[2];
		
		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];
	


		if(file_ext!= ''){
			//Actualizar documento de usuario logueago

			Document.findByIdAndUpdate(documentid,{document_file:file_name},{new:true},(err,DocumentUpdated)=>{
				
				if(err) return res.status(500).send({message:'Error de la peticion'});
				if(!DocumentUpdated) return res.status(404).send({message:'No se ha podido actualizar el usuario'});

				return res.status(200).send({comunicate: DocumentUpdated});

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
	

	var path_file = './uploads/documentos/'+image_file;

	fs.exists(path_file,(exists)=> {
		if(exists){
			res.sendFile(path.resolve(path_file));

		}else {
			res.status(200).send({message:'No existe el archivo'});
		}

	});

}



 module.exports = {
 	home,
 	pruebas,
 	saveDocument,
 	getDocument,
 	getDocuments,
 	updateDocument,
 	uploadImage,
 	getImageFile
 	

 }
