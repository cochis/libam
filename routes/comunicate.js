'use strict'
var  express =require ('express');
var ComunicateController = require('../controllers/comunicate');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/comunicates'});

api.get('/home',ComunicateController.home);
api.get('/pruebas',md_auth.ensureAuth,ComunicateController.pruebas);
api.post('/agregar-comunicado',ComunicateController.saveComunicate);
api.get('/comunicado/:id',ComunicateController.getComunicate);
api.get('/comunicados',ComunicateController.getComunicates);
api.post('/updated-comunicate/:id',ComunicateController.updateComunicate);
api.post('/upload-image-comunicate/:id',md_upload,ComunicateController.uploadImage);
api.get('/get-image-comunicate/:imageFile',ComunicateController.getImageFile);
api.delete('/delete-comunicate/:id',ComunicateController.deleteComunicate);




 /*
api.post('/registro-usuario/:id?',md_auth.ensureAuth,UserController.saveUser);
api.post('/login',UserController.loginUser);
api.get('/user/:id',md_auth.ensureAuth,UserController.getUser);
api.get('/users/:page?',md_auth.ensureAuth,UserController.getUsers);
api.put('/update-user/:id',md_auth.ensureAuth,UserController.updateUser);
api.post('/upload-image-user/:id',[md_auth.ensureAuth,md_upload],UserController.uploadImage);
api.get('/get-image-user/:imageFile',UserController.getImageFile);
api.post('/add-padres/:id',md_auth.ensureAuth,UserController.addTutors);
api.get('/usersby/:page?',md_auth.ensureAuth,UserController.getUsersBy);







 */


module.exports = api;
