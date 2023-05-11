const express = require('express');
const router = express.Router()
require('../../database');
const Equipo = require('../../Models/Equipos');
const scrap = require('../scrap.js')

router.get("/", async (req, res) => {
    scrap()
    const equipos = await Equipo.find().sort('posicion').lean()
    res.render("index.hbs", {equipos: equipos})
});

module.exports = router;