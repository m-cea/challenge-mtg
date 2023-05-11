const {Schema, model} = require('mongoose');

const equiposSchema = new Schema({
    posicion: Number,
    nombre: String,
    puntos: String,
    jugados: String,
    ganados: String,
    empatados: String,
    perdidos: String,
    golesFavor: String,
    golesContra: String,
    diferencia: String,
})

module.exports = model('Equipos', equiposSchema);