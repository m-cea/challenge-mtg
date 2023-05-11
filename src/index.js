const express = require('express')
let exphbs = require('express-handlebars');

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
app.listen(3000)
app.use(rutas)
console.log('Server on port: ' + 3000)


