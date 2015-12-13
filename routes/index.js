var express = require('express');
var router = express.Router();


//Data base
var mongoose = require('mongoose');
var Companies = require('../models/company.js');

//The application is executed on the local machine...
mongoose.connect('mongodb://localhost/ratingCompanies');

//Middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Calificación de Empresas', description: 'Sitio para calificar empresas'});
});

/* Lista de empresas - Company's list */
router.post('/crearEmpresa', function (req, res) {

    var empresa = new Companies({
        nombre: req.body.name,
        rate: req.body.rate
    });
    console.log("Nombre: "+empresa.nombre+" Y Rate: "+empresa.rate);

    empresa.save(function(err) {
       if (err) {
           throw err;
       }
    });

    res.render('../views/empresasExistentes', {title:'YEAH', name: req.body.name, rate: req.body.rate});
});

router.post('/listarEmpresas', function(req, res) {
    //var empresa = new Companies();

    Companies.find({}, function (err, docs) {
        if (!err) {
            console.log(docs);
            res.render(root+ '/views/empresasExistentes', {name: docs.nombre, rate: docs.rate});
        } else {
            throw err;
        }
    });

});

module.exports = router;
