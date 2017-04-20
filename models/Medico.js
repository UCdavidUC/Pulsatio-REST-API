var mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt'),
      SALT_WORK_FACTOR = 10;

var MedicoSchema = new Schema({
    email       : { type: String, required: true, index: { unique: true } },
    contrasena  : { type: String, required: [true, 'Password is too short!'] },
    cedula      : String,
    nombre      : String,
    apellido_p  : String,
    apellido_m  : String,
    updated_at  : {
        type: Date, 
        default: Date.now
    },
    alma_mater      : Number,
    especialidad    : [{
        id_especialidad     : String,
    }],
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

// Medico password encryption
MedicoSchema.pre('save', function(next) {
    var medico = this;
    if (!medico.isModified('contrasena')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);
        bcrypt.hash(medico.contrasena, salt, function(err, hash) {
            if(err) return next(err);
            medico.contrasena = hash;
            next();
        });
    });
});

// Medico Authentication
MedicoSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.contrasena, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Medico', MedicoSchema);