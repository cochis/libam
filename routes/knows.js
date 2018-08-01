'use strict'
var  express =require ('express');
var knowsController = require('../controllers/knows');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/users'});

api.get('/home',knowsController.home);
api.get('/pruebas',md_auth.ensureAuth,knowsController.pruebas);
//api.post('/registro-know',md_auth.ensureAuth,knowsController.saveKnows);
api.post('/registro-know',knowsController.saveKnows);
api.get('/know/:id',md_auth.ensureAuth,knowsController.getknow);
api.get('/getknows/:page?',md_auth.ensureAuth,knowsController.getKnows);
api.put('/update-knows/:id',md_auth.ensureAuth,knowsController.UpdateKnow);
api.delete('/delete-knows/:id',md_auth.ensureAuth,knowsController.deleteKnow);





/*
api.post('/registro-usuario/:id?',UserController.saveUser);
api.post('/login',UserController.loginUser);
api.get('/user/:id',md_auth.ensureAuth,UserController.getUser);
api.get('/users/:page?',md_auth.ensureAuth,UserController.getUsers);
api.put('/update-user/:id',md_auth.ensureAuth,UserController.updateUser);
api.post('/upload-image-user/:id',[md_auth.ensureAuth,md_upload],UserController.uploadImage);
api.get('/get-image-user/:imageFile',UserController.getImageFile);
api.post('/add-padres/:id',UserController.addTutors);
api.get('/usersby/:page?',md_auth.ensureAuth,UserController.getUsersBy);



api.post('/guarda-conocenos',md_auth.ensureAuth,knowsController.saveKnows);

*/




module.exports = api;
