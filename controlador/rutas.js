//En este arhivo estarán todos los llamados (casos de uso)
const express = require('express');
const rutas = express.Router();
const chofer = require('../modelo/chofer')
const pedido = require('../modelo/pedido')
const camion = require('../modelo/camion')

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
rutas.post('/pedido', async(req,res)=>{
    pedido.registrarPedido(req.body.preciokg)
    res.redirect("/")
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
module.exports = rutas;