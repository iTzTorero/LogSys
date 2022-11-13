//En este arhivo estarán todos los llamados (casos de uso)
const express = require('express');
const rutas = express.Router();
const chofer = require('../modelo/chofer')
const pedido = require('../modelo/pedido')
const camion = require('../modelo/camion')

// funciones midleware
rutas.use(function(req, res, next){
    if (req.body.method == "PUT") {
        req.method='PUT'
        req.url = req.path;
    } 
    if (req.body.method == "DELETE") {
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
rutas.post('/post-chofer', async (req, res) => {
    chofer.registrarChofer(req.body.nombre)
    res.setHeader('Content-type', 'text/applicationjson')
    res.send(JSON.stringify({ result: "Chofer registrado correctamente" }))
})

//Eliminar chofer
rutas.delete('/delete-chofer', async (req, res) => {
    chofer.eliminarChofer(req.body.idchofer)
    res.send(JSON.stringify({ result: "Chofer eliminado correctamente" }))

})

//Insertar pedido
rutas.post('/post-pedido', async(req,res)=>{
  pedido.registrarPedido(req.body.preciokg, req.body.npedido) 
  res.setHeader('Content-type', 'text/applicationjson')
  res.send(JSON.stringify({ result: "Pedido registrado correctamente" }))

})

//Eliminar Pedido
rutas.delete('/delete-pedido', async(req,res)=>{
    pedido.eliminarPedido(req.body.idpedido)
    res.setHeader('Content-type', 'text/applicationjson')
    res.send(JSON.stringify({ result: "Pedido eliminado correctamente" }))})

//Insertar camion
rutas.post("/post-camion", async(req,res)=>{
    camion.registrarCamion(req.body.placas, req.body.marca,req.body.color)
    res.setHeader('Content-type', 'text/applicationjson')
    res.send(JSON.stringify({ result: "Camion registrado correctamente" }))})

//Eliminar Camion
rutas.delete('/delete-camion', async(req,res)=>{
    camion.eliminarCamion(req.body.idcamion)
    res.setHeader('Content-type', 'text/applicationjson')
    res.send(JSON.stringify({ result: "Camion eliminado correctamente" }))})

module.exports = rutas;