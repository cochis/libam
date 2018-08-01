'use strict'
var mongoose = require('mongoose');
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var Catalog = require('../models/catalog');
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


 function saveCatalog(req,res){
	var params = req.body;
	var catalog = new Catalog ();


	//si existen los datos 
	if( params.type_catalog && 
		params.clv  && 
		params.description 
		) {
		//seteamos variables
		catalog.type_catalog = params.type_catalog;
		catalog.clv = params.clv;
		catalog.description = params.description;

		
		Catalog.find({ $or:[
			{type_catalog:catalog.type_catalog.toUpperCase()},
			{clv:catalog.clv.toUpperCase()},
			{description:catalog.description.toUpperCase()}
			]}).exec((err,catalogs) => {
				if(err) return res.status(500).send({message:'Error en la peticion de catalogos'});

				if(catalogs && catalogs.length >= 1 ) {
					return res.status(200).send({message:'El registro del catalogo a registrar ya existe!! '});
				}else {
						

						catalog.save((err,catalogStored) => {
							
							if (err) return res.status(500).send({message:'Error al guardar el registro del catalogo'});
							if(catalogStored){
								res.status(200).send({catalog: catalogStored});
							}else {
								res.status(404).send({message: 'No se ha registrado el registro del catalogo'});
							}
						});
						

				}

			});

						
		
		

	} else {

		res.status(200).send({

			message:'Envia todos los campos necesarios !!'
		});
	}
 }


 function getCatalog(req,res){
	var catalogId = req.params.id;
	
	Catalog.findById(catalogId,(err,catalog) => {
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!catalog) return res.status(404).send({
			message: 'El registro de catalogo no existe'
		});

		return res.status(200).send({catalog})
	});
}
function getCatalogsByPage(req,res){
	
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var itemsPerPage = 100;

	Catalog.find().sort('_id').paginate(page,itemsPerPage,(err,catalogs,total)=>{
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!catalogs) return res.status(404).send({
			message: 'No hay usuarios disponibles'
		});

		return res.status(200).send({
			catalogs,
			total,
			pages: Math.ceil(total/itemsPerPage)				
		});


	});
}


function getCatalogsByType(req,res){
	var params = req.body
	

	Catalog.find({type_catalog:params.type_catalog},(err,catalogs,total)=>{
		if(err) return res.status(500).send({message:'Error en la peticion'});
		if(!catalogs) return res.status(404).send({message: 'No hay usuarios disponibles'});

		return res.status(200).send({
			catalogs,
			total			
		});



	
		});
}
function updateCatalog(req,res){
	var catalogId = req.params.id;
	var update = req.body;

	
	
	
	Catalog.findByIdAndUpdate(catalogId,update,{new:true},(err, CatalogUpdated) => {
		if(err) return res.status(500).send({message:'Error de la peticion'});
		if(!CatalogUpdated) return res.status(404).send({message:'No se ha podido actualizar el usuario'});

		return res.status(200).send({Catalog: CatalogUpdated});

	});
	
}



 module.exports = {
 	
 	home,
 	pruebas,
 	saveCatalog,
 	getCatalog,
 	getCatalogsByPage,
 	getCatalogsByType,
 	updateCatalog

 }
