const mongoose = require('mongoose');

const TareasSchema = new mongoose.Schema({
    titulo: {
        type: String,
    },
    mensaje: {
        type: String,
    },
});

const Tarea = mongoose.model('Tarea',TareasSchema);

module.exports = Tarea;
