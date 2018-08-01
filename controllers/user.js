'use strict'
var mongoose = require('mongoose');
var bcrypt =require ('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var User = require('../models/user');
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
function saveUser(req,res){
	console.log(req);
	var params = req.body;
	var user = new User ();
	var nid = getNid(params.year_registry,params.grade,user);

	//si existen los datos 
	if( params.name 

		) {
		
		//seteamos variables
		user.name = params.name;
		user.f_surname = params.f_surname;
		user.s_surname = params.s_surname;
		user.curp = params.curp;
		
		user.civil_status = params.civil_status;
		user.nacionality = params.nacionality;
		user.birth_state = params.birth_state;
		user.gender = params.gender;
		user.birth_date = params.birth_date;
		user.lang_m = params.lang_m;
		user.type_doc_id = params.type_doc_id;
		user.folio_doc = params.folio_doc;
		user.email = params.email;
		user.password = params.password;
		user.image = "avatar1.jpg";
		user.street = params.street;
		user.between_street_1 = params.between_street_1;
		user.between_street_2 = params.between_street_2;
		user.number_home = params.number_home;
		user.apple = params.apple;
		user.lote = params.lote;
		user.number_int = params.number_int;
		user.department = params.department;
		user.other_reference = params.other_reference;
		user.cp = params.cp;
		user.colony = params.colony;
		user.federal_entity = params.federal_entity;
		user.municipality = params.municipality;
		user.location = params.location;
		user.active = false;
		user.id_alumno_tutor = params.id_alumno_tutor;
		user.main_tutor = false;
		user.role = params.role;
		user.description_role = params.description_role;
		user.year_registry = params.year_registry;
		user.grade = params.grade;
		
		console.log("nid   " +nid);
		user.nid = nid;
		
		User.find({ $or:[
			{email:user.email.toLowerCase()},
			{curp:user.curp.toUpperCase()}
			]}).exec((err,users) => {
				if(err) return res.status(500).send({message:'Error en la peticion de usuarios'});


				
				if(users && users.length >= 1 ) {
					return res.status(200).send({message:'El usuario que intentas registrar ya existe!! '});
				}else {

						bcrypt.hash(params.password,null,null,(err,hash) => {
							user.password = hash;
							
							
							user.save((err,userStored) => {
								
								if (err) return res.status(500).send({message:'Error al guardar el usuario'});
								if(userStored){
									res.status(200).send({user: userStored});
								}else {
									res.status(404).send({message: 'No se ha registrado el usuario'});
								}
							});
						});

				}

			});

						
		
		

	} else {
		console.log(user);
		res.status(200).send({

			message:'Envia todos los campos !!'
		});
	}
 }

//metodo Agregar tutores

function addTutors (req,res){
	
	var userId = req.params.id;
	
	
	




		var params = req.body;
		var user = new User ();

		
		//si existen los datos 
		if( params.name 

			) {
			//seteamos variables
			user.name = params.name;
			user.f_surname = params.f_surname;
			user.s_surname = params.s_surname;
			user.curp = params.curp;
			user.civil_status = params.civil_status;
			user.nacionality = params.nacionality;
			user.birth_state = params.birth_state;
			user.gender = params.gender;
			user.birth_date = params.birth_date;
			user.lang_m = params.lang_m;
			user.type_doc_id = params.type_doc_id;
			user.folio_doc = params.folio_doc;
			user.email = params.email;
			user.password = params.password;
			user.image = "avatar2.jpg";
			user.street = params.street;
			user.between_street_1 = params.between_street_1;
			user.between_street_2 = params.between_street_2;
			user.number_home = params.number_home;
			user.apple = params.apple;
			user.lote = params.lote;
			user.number_int = params.number_int;
			user.department = params.department;
			user.other_reference = params.other_reference;
			user.cp = params.cp;
			user.colony = params.colony;
			user.federal_entity = params.federal_entity;
			user.municipality = params.municipality;
			user.location = params.location;
			user.active = params.active;
			user.id_alumno_tutor = userId;
			user.main_tutor = params.main_tutor;
			user.role = params.role;
			user.description_role = params.description_role;
			user.year_registry = params.year_registry;


			User.find({id_alumno_tutor:userId}).exec((err,usersT) => {
				if(usersT && usersT.length >= 2 ){
					return res.status(200).send({message: 'Ya tienes 2 papas registrados'});

				}else {
					
					User.find({ $or:[
					{email:user.email.toLowerCase()},
					{curp:user.curp.toUpperCase()}
					]}).exec((err,users) => {
						if(err) return res.status(500).send({message:'Error en la peticion de usuarios'});



						if(users && users.length >= 1 ) {
							return res.status(200).send({message:'El usuario que intentas registrar ya existe!! '});
						}else {
								bcrypt.hash(params.password,null,null,(err,hash) => {
									user.password = hash;

									user.save((err,userStored) => {
										
										if (err) return res.status(500).send({message:'Error al guardar el usuario'});
										if(userStored){
											res.status(200).send({user: userStored});
										}else {
											res.status(404).send({message: 'No se ha registrado el usuario'});
										}
									});
								});

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


//MEtodo login
 function loginUser(req,res) {
 	var params = req.body;

 	var email = params.email;
 	var password = params.password;


 	User.findOne({email: email } ,(err,user)=> {
 		if (err) return res.status(500).send({message:'Error en la peticion'});
 		if (user){
 			bcrypt.compare(password,user.password,(err,check)=> {
 				if(check){
 					//devolver datos de usuiario
 					if (params.gettoken){
 						//devolver token

 						return res.status(200).send({
 							token: jwt.createToken(user)
 						});

 						//generar token 

 					}else{
 						user.password = undefined;
 						return res.status(200).send({user})

 					}
 					


 				}else {
 					return res.status(404).send({message:'El usuario no se ha podido identificar'});	
 				}
 			})
 		} else {
 			return res.status(404).send({message:'El usuario no se ha podido identificar!!'});
 		}
 	});

 }
//MEtodo para conseguis datos de un usuario

function getUser(req,res){
	var userId = req.params.id;
	
	User.findById(userId,(err,user) => {
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!user) return res.status(404).send({
			message: 'El usuario no existe'
		});

		return res.status(200).send({user})
	});
}



//Devolver Listado de usuarios paginados

function getUsers(req,res){
	var identify_user_id = req.user.sub;
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var itemsPerPage = 3;

	User.find().sort('_id').paginate(page,itemsPerPage,(err,users,total)=>{
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!users) return res.status(404).send({
			message: 'No hay usuarios disponibles'
		});

		return res.status(200).send({
			users,
			total,
			pages: Math.ceil(total/itemsPerPage)				
		});


	});
}
//Devolver Listado de usuarios paginados

function getUsersBy(req,res){

	var params = req.body;	
	

/*
	var identify_user_id = req.user.sub;
	var page = 1;
	if(req.params.page){
		page = req.params.page;
	}
	var itemsPerPage = 3;
	User.find({id_alumno_tutor:userId}).exec((err,usersT) => {
	User.find().sort('_id').paginate(page,itemsPerPage,(err,users,total)=>{
		if(err) return res.status(500).send({
			message:'Error en la peticion'});
		if(!users) return res.status(404).send({
			message: 'No hay usuarios disponibles'
		});

		return res.status(200).send({
			users,
			total,
			pages: Math.ceil(total/itemsPerPage)				
		});


	});*/
}

//Actualizar datos de usuario

function updateUser(req,res){
	var userId = req.params.id;
	var update = req.body;

	//borrar password
	delete update.password;
	if(userId != req.user.sub){
		return res.status(500).send({message:'No tienes permiso para actualizar los datos del usuario'});
	}
	User.findByIdAndUpdate(userId,update,{new:true},(err, userUpdated) => {
		if(err) return res.status(500).send({message:'Error de la peticion'});
		if(!userUpdated) return res.status(404).send({message:'No se ha podido actualizar el usuario'});

		return res.status(200).send({user: userUpdated});

	});
	
}


//subir imagen

function uploadImage (req, res){
	var userId = req.params.id;
	

	if(req.files){
		var file_path = req.files.image.path;
	
		var file_split = file_path.split('/');
		
		var file_name = file_split[2];
		
		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];
		

		if(userId != req.user.sub){
			return removeFilesOfUploads(res,file_path,'No tienes permiso para actualizar los datos del usuario');
			
		}


		if(file_ext=='png' || file_ext == 'jpg' || file_ext == 'jpeg'|| file_ext == 'gif'){
			//Actualizar documento de usuario logueago

			User.findByIdAndUpdate(userId,{image:file_name},{new:true},(err,userUpdated)=>{
				
				if(err) return res.status(500).send({message:'Error de la peticion'});
				if(!userUpdated) return res.status(404).send({message:'No se ha podido actualizar el usuario'});

				return res.status(200).send({user: userUpdated});

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
	

	var path_file = './uploads/users/'+image_file;

	fs.exists(path_file,(exists)=> {
		if(exists){
			res.sendFile(path.resolve(path_file));

		}else {
			res.status(200).send({message:'No existe la imagen'});
		}

	});


}

function getNid(year_registry,grade,user){
	
	let nid = 	year_registry;
	let num;
	User.find({ $or:[
			{grade:user.grade},
			{cicle:user.cicle}
			]}).exec((err,users) => {
				if(err) return res.status(500).send({message:'Error en la peticion de usuarios'});
				if(users) {				
							console.log("igual a 0");
							if (users.length === 0){
								
						    grade = grade.substring(0, 3);
							nid= nid+grade+"01";
							console.log(nid);
							return nid;
							}
							if (users.length > 0 && users.length < 10){
								console.log("menor de 10");
								grade = grade.substring(0, 3);
						 		num = users.length + 1; 
					 			nid= nid+grade+"0"+num;
					 			console.log(nid)
					 			return nid;
							}
							else {
								console.log("mayor de 10");
								 num = users.length +1; 
								nid= nid+num;
								console.log(nid)
								return nid;
							}


							

						}
			});
			
			
			
			
			
}


 module.exports = {
 	home,
 	pruebas,
 	saveUser,
 	loginUser,
 	getUser,
 	getUsers,
 	updateUser,
 	uploadImage,
 	getImageFile,
 	addTutors,
 	getUsersBy

 }
