'use strict'
var  express =require ('express');

var ContactController = require('../controllers/contact');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/users'});








api.get('/home',ContactController.home);
api.post('/enviarcontacto',ContactController.saveAndSend);









module.exports = api;

