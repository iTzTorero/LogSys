const mysql = require('mysql2')
var conexion = mysql.createConnection({
    host: 'logsys-database.cjhkwxzvzene.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'R575859t595857',
    database: 'Logsys'
})

conexion.connect((err)=>{
    if (err!=null) {
        console.log("Error al conectar a la base de datos "+err);
    }else{
  
    }
});

exports.registrarPedido=(preciokg)=>{
    conexion.query("INSERT INTO `Logsys`.`Pedido` (`preciokg`) VALUES ("+preciokg+");", function (error, results, fields) {
        if (!error) {
            console.log("Se registro el pedido correctamente");
        }else{
            console.log(error);
        }
    });
}

exports.eliminarPedido=(id)=>{
    conexion.query("DELETE FROM `Logsys`.`Pedido` WHERE (`idPedido` = "+id+");", function (error, results, fields) {
        if (!error) {
            console.log("Se elimino el pedido correctamente");
        }else{
            console.log(error);
        }
    });
}
