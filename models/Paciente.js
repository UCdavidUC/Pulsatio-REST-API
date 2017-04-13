var mongoose = require('mongoose');

var PacienteSchema = new mongoose.Schema({
    _email      : String,
    contrasena  : String,
    nombre      : String,
    apellido_p  : String,
    apellido_m  : String,
    celular     : Number,
    telefono    : Number,
    updated_at  : {
        type    : Date, 
        default : Date.now
    },
    expediente  : {
        _id             : String,
        fecha_nac       : Date,
        genero          : String,
        origen          : String,
        edo_civil       :String,
        ocupacion       : String,
        religion        : String,
        escolaridad     : String,
        domicilio_completo  : String,
        familiar_responsable    : String,
        date_time : {
            type    : Date,
            default : Date.now
        },
        alergias : String,
        ant_personales_patologicos : String,
        ant_quirugicos : {
            _id     : String,
            descripcion : String,
            fecha       : String,
            complicaciones  : String
        },
        ant_heredofamiliares    : String,
        ant_andro_gineco        : String,
        ant_personales          : String,
        padecimiento_actual     : String,
        int_aparatos_sistemas   : {
            _id         : String,
            aparato_sistema     : String,
            descripcion     : String
        },
        estudios_realizados : {
            _id         : String,
            fecha       : Date,
            descripcion : String
        }
    },
    consulta: {
        _id     : String,
        date_time   : {
            type    : Date,
            default : Date.now
        },
        diagnostico             : String,
        diagnostico_diferencial : String,
        tratamiento             : String,
        anotaciones             : String,
        exploracion_fisica      : String
    },
    medicos_tratantes   : {
        _id_medico          : String,
        updated_at : {
            type    : Date,
            default : Date.now
        }
    }
});

module.exports = mongoose.model('Paciente', PacienteSchema);