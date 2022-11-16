const { DataTypes, STRING } = require("sequelize");
const { sequelize } = require("./conexion");

const Pedido = sequelize.define("Pedido",{
    idPedido:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    preciokg : { type: DataTypes.DOUBLE},
    nPedido : { type: DataTypes.STRING }
 
},{
    tableName: 'Pedido',
    createdAt: false,
    updatedAt: false
});

module.exports = Pedido

