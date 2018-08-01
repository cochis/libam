'use strict'
var  express =require ('express');
var CatalogController = require('../controllers/catalog');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/users'});

api.get('/home',CatalogController.home);
api.post('/registro-catalogo',CatalogController.saveCatalog);
api.get('/catalog/:id',CatalogController.getCatalog);
api.get('/catalogsbypage/:page?',CatalogController.getCatalogsByPage);
api.post('/catalogsbytype',CatalogController.getCatalogsByType);
api.post('/catalog-update/:id',CatalogController.updateCatalog);






module.exports = api;
