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
        console.log("Conectado a base de datos");
  
    }
});

exports.registrarChofer=(nombre)=>{
    conexion.query("INSERT INTO `Logsys`.`Chofer` (`nombre`) VALUES ('"+nombre+"');", function (error, results, fields) {
        if (!error) {
            console.log("Se registro el chofer correctamente");
        }
    });
}

exports.eliminarChofer=(id)=>{
    conexion.query("DELETE FROM `Logsys`.`Chofer` WHERE (`idChofer` = "+id+");", function (error, results, fields) {
        if (!error) {
            console.log("Se elimino el chofer correctamente");
        }else{
            console.log(error);
        }
    });
}

exports.consultarChoferes=()=>{
    
}


