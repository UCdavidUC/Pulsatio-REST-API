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
  });
});

module.exports = router;
