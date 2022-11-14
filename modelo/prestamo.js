const { DataTypes, STRING } = require("sequelize");
const { sequelize } = require("./conexion");

const Prestamo = sequelize.define("Prestamo",{
    idPrestamo:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    monto : { type: DataTypes.DOUBLE},
    fecha : { type: DataTypes.DATE },
    detalle : { type : DataTypes.STRING},
    idChofer : { type : DataTypes.STRING}
 
},{
    tableName: 'Prestamo',
    createdAt: false,
    updatedAt: false
});

module.exports = Prestamo;