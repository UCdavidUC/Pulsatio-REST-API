var mongoose = require('mongoose');

var MedicoSchema = new mongoose.Schema({
    cedula      : String,
    nombre      : String,
    apellido_p  : String,
    apellido_m  : String,
    _email      : String,
    contrasena  : String,
    updated_at  : {
        type: Date, 
        default: Date.now
    },
    alma_mater      : Number,
    especialidad    : {
        _id         : Number,
        nombre      : String,
        descripcion : String,
        tipo        : String
    },
    subespecialidad : {
        _id         : Number,
        nombre      : String,
        descripcion : String,
        tipo        : String
    },
    cedeHospitalaria : Number,
    comentario  : {
        _id         : String,
        fecha_hora  : {
            type    : Date,
            default : Date.now
        },
        contenido   : String,
        estado      : Boolean,
        rating      : Number,
        useful      : Number,
        unuseful    : Number
    }
});

module.exports = mongoose.model('Medico', MedicoSchema);