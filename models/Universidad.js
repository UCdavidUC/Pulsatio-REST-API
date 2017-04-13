var mongoose = require('mongoose');

var universidadSchema = new mongoose.Schema({
    _id         : Number,
    nombre      : String,
    direccion   : String,
    colonia     : String,
    municipio   : String,
    estado      : String,
    longitude   : Number,
    latitude    : Number
});

module.exports = mongoose.model('Universidad', universidadSchema);