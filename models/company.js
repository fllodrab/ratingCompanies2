var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var assert = require('assert');

'use strict'
//Estructura de Datos
var Empresa = new Schema({
    nombre: {
        type: String,
        required: true
    },
    rate:{
        type: Number,
        required: true
    }

});

var Company = mongoose.model('Company', Empresa);

console.log("Nice!: All complete succesfully :D");

module.exports = Company;