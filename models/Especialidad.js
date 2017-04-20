var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var EspecialidadSchema = new Schema({
    nombre      : String,
    descripcion : String,
    tipo        : String
});

module.exports = mongoose.model('Especialidad', EspecialidadSchema);