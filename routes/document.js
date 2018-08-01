'use strict'
var  express =require ('express');
var documentController = require('../controllers/document');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/documentos'});

api.get('/home',documentController.home);
api.get('/pruebas',md_auth.ensureAuth,documentController.pruebas);
api.post('/registro-documento',documentController.saveDocument);
api.get('/documento/:id',md_auth.ensureAuth,documentController.getDocument);
api.get('/documentos/:page?',documentController.getDocuments);
api.put('/update-documento/:id',md_auth.ensureAuth,documentController.updateDocument);
api.post('/upload-image-documento/:id',[md_auth.ensureAuth,md_upload],documentController.uploadImage);
api.get('/get-documento/:imageFile',documentController.getImageFile)

//api.post('/registro-know',md_auth.ensureAuth,knowsController.saveKnows);




/*

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
