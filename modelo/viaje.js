const { DataTypes } = require("sequelize");
const { DataTypes } = require("sequelize/types");
const { sequelize } = require("./conexion");

const Viaje = sequelize.define("Viaje",{
    idViaje: {
        type: DataTypes.INTEGER,
        primaryKey : true
    },
    sociedad: { type : DataTypes.STRING},
    origen: { type : DataTypes.STRING},
    lugar: { type : DataTypes.STRING},
    productor: { type : DataTypes.STRING},
    remision: { type : DataTypes.STRING},
    pesoplanta: { type : DataTypes.DOUBLE},
    pesocampo: { type : DataTypes.DOUBLE},
    precioflete: { type : DataTypes.DOUBLE},
    gasto: { type : DataTypes.DOUBLE},
    fletependiente: { type : DataTypes.DOUBLE},
    fecha : { type : DataTypes.DATETIME},
    estado : { type : DataTypes.INTEGER},
    idPedido : { type: DataTypes.INTEGER},
    idChofer : { type: DataTypes.INTEGER},
    idCamion : { type: DataTypes.INTEGER}
 
},{
    tableName: 'Viaje',
    createdAt: false,
    updatedAt: false
});

module.exports = Viaje
