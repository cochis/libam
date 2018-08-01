'use  strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//cargar archivo de rutas
var user_routes = require ('./routes/user');
var knows_routes = require ('./routes/knows');
var catalog_routes = require ('./routes/catalog');
var contact_routes = require ('./routes/contact');
var cominicate_routes = require ('./routes/comunicate');
var document_routes = require ('./routes/document');
var path = require('path');
 
//middlewares


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas

app.use('/',express.static('client',{redirect:false}));
app.use('/libam-internal', user_routes);

app.use('/catalogo', catalog_routes);
app.use('/contact', contact_routes);
app.use('/knows', knows_routes);
app.use('/comunicados', cominicate_routes);
app.use('/documentos', document_routes);

app.get('*',function(req,res,next){
	res.sendFile(path.resolve('client/index.html'));
});

//exportar
module.exports = app;



