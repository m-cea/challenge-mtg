const express = require('express');
const router = express.Router()
require('../../database');
const Equipo = require('../../Models/Equipos');
const Brasil = require('../../Models/Brasil');
const br = require('../scrapBrasil.js')
const scrap = require('../scrap.js')

router.get("/", async (req, res) => {
    scrap()
    const equipos = await Equipo.find().sort('posicion').lean()
    res.render("index.hbs", {equipos: equipos})
});

router.get("/brasil", async (req, res) => {
    br()
    const brasil = await Brasil.find().sort('posicion').lean()
    res.render("brasil.hbs", {brasil: brasil})
});

module.exports = router;