var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Paciente = require('../models/Paciente.js');

/* GET patients listing. */
router.get('/', function(req, res, next) {
  console.log('Getting patients list...');
  Paciente.find(function(err, pacientes) {
    if(err) return next(err);
    res.json(pacientes);
  });
});

/* POST /pacientes */
router.post('/', function(req, res, next){
  Paciente.create(req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});

/* GET /pacientes/:id */
router.get('/:id', function(req, res, next) {
  Paciente.findById(req.params.id, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* PUT /pacientes/:id */
router.put('/:id', function(req, res, next) {
  Paciente.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* DELETE /pacientes/:id */
router.delete('/:id', function(req, res, next) {
  Paciente.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* GET /pacientes/dashboard/:id */
router.get('/dashboard/:id', function(req, res, next) {
  Paciente.findById(req.params.id, function(err, post) {
    if(err) return next(err);
    res.render('internal/dashboard', { avg : post.averages, rng : post.ranges } );
    res.json(post);
  });
});

/* User Authentication */
/* router.get('/:credentials', function(req, res) {
  Paciente.findOne(req.param.credentials[0], function(err, paciente) {
    if(err) throw err;

    paciente.comparePassword(req.param.credentials[1], function(err, isMatch) {
      if(err) {
        throw err;
      } else {
        console.log('Paciente válido.');
        res.send({
          "id": req.param.credentials[0], 
          "password": req.param.credentials[1]
        }, isMatch);
      }
    });

  });
}); */

module.exports = router;
