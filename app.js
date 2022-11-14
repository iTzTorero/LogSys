const express = require('express');
const bodyParser = require('body-parser');
const {registerRoutes} = require('./controlador/rutas.js')

function spawnServer(){
    const app = express();
    const port = 8080;

    app.use(bodyParser.json());

    //configurar vistas
    app.set('views', __dirname + '/vista')
    app.set('view engine', 'html');
    
    //app.set('view engine', 'ejs')

    //Middleware errores
    app.use((err, req, res, next) => {
        res.json({message: 'Internal server error.'}, 500);
    })

    registerRoutes(app);

    app.listen(port, () => {
        console.log(`RESTful server running at http://127.0.0.1:${port}`);
    });
}


spawnServer();


/*
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//configurar vistas
app.set('views', __dirname + '/vista')
app.set('view engine', 'ejs')
//configurar rutas



const indiceRutas = require('./controlador/rutas')
app.use('/', indiceRutas)

app.listen(port, () => {
    console.log(`RESTful server running at http://127.0.0.1:${port}`);

})
*/