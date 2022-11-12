const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//configurar vistas
app.set('views', __dirname + '/vista')
app.set('view engine', 'ejs')
//configurar rutas
const indiceRutas = require('./controlador/rutas')
app.use('/', indiceRutas)

app.listen(3000, () => {
    console.log('express Corriendo en el puerto 3000');

})
