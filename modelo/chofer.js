const { DataTypes } = require("sequelize");
const { sequelize } = require("./conexion");

const Chofer = sequelize.define("Chofer",{
    idChofer:{
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    nombre : { type: DataTypes.STRING}
 
},{
    tableName: 'Chofer',
    createdAt: false,
    updatedAt: false
});

module.exports = Chofer
