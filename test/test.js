var should = require('should');
var request = require('supertest');

// Cargar aplicación principal
var app = require('../app.js');

// Test a la raiz
describe('/', function(){
	it('Acceso a raiz', function(done){
    	request(app)
      	.get('/')
      	.expect(200)
      	.end(function(err, res){
      		if (err) {
            	return done(err);
          	}
      		done();
      	});
	});
});

// Prueba de ingreso vacío de username
describe('crearEmpresa', function(){
	it('Prueba...', function(done){
    	request(app)
      	.post('/crearEmpresa')
      	.send({ name: "Fernando", rate: "7" })
      	.expect(200)
      	.end(function(err, res){
      		if (err) {
            	return done(err);
          	}
      		res.text.should.match(/<span id="empresa">Fernando - 7/);
      		done();
      	});
	});
});

describe('listarEmpresas', function(){
	it('Listar Empresas', function(done){
    	request(app)
      	.post('/listarEmpresas')
      	.expect(200)
      	.end(function(err, res){
      		if (err) {
            	return done(err);
          	}
      		done();
      	});
	});
});


