const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const Pago = sequelize.define("Pago",{
    idPrestamo:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
   monto : { type : DataTypes.DOUBLE},
   fecha : { type: DataTypes.DATETIME},
   detalle : { type : DataTypes.STRING(45)},
   idChofer : { type : DataTypes.STRING(45)}
 
},{
    tableName: 'Pago',
    createdAt: false,
    updatedAt: false
});

module.exports = Pago
