var express = require('express');
var router = express.Router();

var Medico = require('../models/Medico.js');

/* GET medicos list. */
router.get('/', function(req, res, next) {
  Medico.find(function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /medicos */
router.post('/', function(req, res, next) {
  Medico.create(req.body, function(err, post) {
    if(err) {
      console.log(err);
      return next(err);
    } 
    res.json(post);
  });
});

/* User validation post request */
router.post('/:id', function(req, res, next) {
  Medico.findOne(req.body._id, function(err, post) {
    if(err) throw err;
    Medico.comparePassword(req.body.password, function(err, isMatch) {
      res.json(post);
      res.send(req.body);
    });
  });
});

/* GET /medicos/:id */
router.get('/:id', function(req, res, next) {
  Medico.findById(req.params.id, function(err, post) {
    if(err) return next(err);
    res.json(post);
    //res.send(res.json);
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
    res.send('Hola Dr. ' + post._id);
  });
});

module.exports = router;