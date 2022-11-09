const mysql = require('mysql')
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

exports.registrarCamion=(placas,marca,color)=>{
    conexion.query("INSERT INTO `Logsys`.`Camion` (`placas`, `marca`, `color`) VALUES ('"+placas+"', '"+marca+"', '"+color+"');", function (error, results, fields) {
        if (!error) {
            console.log("Se registro el camion correctamente");
        }else{
            console.log(error);
        }
    });
}

exports.eliminarCamion=(id)=>{
    conexion.query("DELETE FROM `Logsys`.`Camion` WHERE (`idCamion` = "+id+");", function (error, results, fields) {
        if (!error) {
            console.log("Se elimino el camion correctamente");
        }else{
            console.log(error);
        }
    });
}
