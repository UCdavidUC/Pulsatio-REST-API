var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Medico = require('../models/Medico.js');

/* GET medicos list. */
router.get('/', function(req, res, next) {
  Medico.find(function(err, medicos) {
    if (err) return next(err);
    res.json(medicos);
  });
});

/* POST /medicos */
router.post('/', function(req, res, next) {
  Medico.create(req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* GET /medicos/:id */
router.get('/:id', function(req, res, next) {
  Medico.findById(req.params.id, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* PUT /medicos/:id */
router.put('/:id', function(req, res, next) {
  Medico.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* DELETE /medicos/:id */
router.delete('/:id', function(req, res, next) {
  Medico.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

module.exports = router;