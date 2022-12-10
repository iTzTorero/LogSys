const Sequelize = require("sequelize");
const env = 'local';
const config = require(__dirname + '/../config/config.json')[env];
const db = {}

const sequelize = new Sequelize(
   config.database,
   config.username,
   config.password,
    {
      host: config.host,
      dialect: config.dialect
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
