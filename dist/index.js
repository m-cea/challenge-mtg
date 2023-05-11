const express = require('express')
let exphbs = require('express-handlebars');
const config = require('dotenv').config()

require('../database')
require('../Models/Equipos')
const rutas = require('./routes/rutas')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.set('views', path.join(__dirname + '/views'))
app.engine('.hbs', exphbs.engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.listen(process.env.PORT)
app.use(rutas)


