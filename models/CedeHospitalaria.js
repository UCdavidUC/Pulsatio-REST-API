var mongoose = require('mongoose');

var cedeHospitalariaSchema = new mongoose.Schema({
    _id         : Number,
    nombre      : String,
    abreviatura : String,
    direccion   : String,
    colonia     : String,
    municipio   : String,
    estado      : String,
    longitude   : Number,
    latitude    : Number,
    unidadDeEmergencias : {
        _id             : Number,
        nombre          : String,
        telefono        : String,
        disponibilidad  : Number,
        horarioActivo   : Date,
        horarioActivo   : Date
    }
});

module.exports = mongoose.model('CedeHospitalaria', cedeHospitalariaSchema);