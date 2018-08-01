'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/db_libam')
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	//creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:3600");
        	});

        })
        .catch(err => console.log(err));



       