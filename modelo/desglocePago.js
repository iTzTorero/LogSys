const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const DesglocePago = sequelize.define("DeglosePago",{
    idDesglocePago:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    importe : { type: DataTypes.DOUBLE},
    idPago : { type: DataTypes.INTEGER},
    idViaje : { type: DataTypes.INTEGER}
    
},{
    tableName: 'DeglosePago',
    createdAt: false,
    updatedAt: false
});

module.exports = DesglocePago