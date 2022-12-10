
var path = require('path');
const CamionController = require('../controladores/CamionController.js');
const PedidoController = require('../controladores/PedidoController.js');
const ChoferController = require('../controladores/ChoferController.js');
const PrestamoController = require('../controladores/PrestamoController.js');


const registerRoutes = (app) => {
    const camiones = new CamionController();
    const pedidos = new PedidoController();
    const choferes = new ChoferController();
    const prestamos = new PrestamoController();

    //endpoint default
    app.get('/', async (req, res) => {
        // res.send("Hola, desde la ruta GET/");

            res.sendFile(path.resolve('vista/registroChofer.html'));
           
           
    });
    
    
    app.get('/camion/:id', camiones.find);
    app.get('/camion', camiones.find);
    app.post('/camion', camiones.add);
    app.put('/camion', camiones.update);
    app.delete('/camion', camiones.delete);

    app.get('/chofer/:id', choferes.find);
    app.get('/chofer', choferes.find);
    app.post('/chofer', choferes.add);
    app.put('/chofer/:id', choferes.update);
    app.delete('/chofer', choferes.delete);

    app.get('/pedido/:id', pedidos.find);
    app.get('/pedido', pedidos.find);
    app.post('/pedido', pedidos.add);
    app.put('/pedido', pedidos.update);
    app.delete('/pedido', pedidos.delete);


    app.get('/prestamo/:id', prestamos.find);
    app.get('/prestamo', prestamos.find);
    app.post('/prestamo', prestamos.add);
    app.put('/prestamo/:id', prestamos.update);
    app.delete('/prestamo', prestamos.delete);
    
}

module.exports = { registerRoutes};

/*

//En este arhivo estarán todos los llamados (casos de uso)
const express = require('express');
const rutas = express.Router();
const chofer = require('../modelo/chofer')
const pedido = require('../modelo/pedido')
const camion = require('../modelo/camion')
const camiones = require('../controladores/CamionController.js');

// funciones midleware
rutas.use(function(req, res, next){
    if (req.query._method == "PUT") {
        req.method='PUT'
        req.url = req.path;
    } 
    if (req.query._method == "DELETE") {
        req.method='DELETE'
        req.url = req.path
    } 

    next();
})

//endpoint default
rutas.get('/', async (req, res) => {
    // res.send("Hola, desde la ruta GET/");

    //console.log(listaEstudiantes);
    res.render("index");
});

//Insertar chofer
rutas.post('/chofer', async (req, res) => {
    chofer.registrarChofer(req.body.nombre)
    res.redirect("/");

})

//Eliminar chofer
rutas.get('/eliminarchofer', async (req, res) => {
    chofer.eliminarChofer(req.query.idEliminar)
    res.redirect("/");

})

//Insertar pedido
rutas.post('/post-pedido', async(req,res)=>{
  // pedido.registrarPedido(req.body.preciokg)
  console.log(req.body);  
  console.log(req.query);  
})

//Eliminar Pedido
rutas.get('/eliminarpedido', async(req,res)=>{
    pedido.eliminarPedido(req.query.idEliminar)
    res.redirect("/")
})

//Insertar camion
rutas.post("/camion", async(req,res)=>{
    camion.registrarCamion(req.body.placas, req.body.marca,req.body.color)
    res.redirect("/")
})

//Eliminar Camion
rutas.get('/eliminarcamion', async(req,res)=>{
    camion.eliminarCamion(req.query.idEliminar)
    res.redirect("/")
})


rutas.get('/camion', async(req, res) =>{
    camiones.find();
    res.redirect("/");
})

module.exports = rutas;
*/