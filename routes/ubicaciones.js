var express = require('express');
var router = express.Router();

var Ubicacion = require('../models/Ubicacion.js');

/* GET ubicaciones */
router.get('/', function(req, res, next) {
    Ubicacion.find(function(err, post) {
        if(err) return next(err);
        res.json(post);
    })
})
