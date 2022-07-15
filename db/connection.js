const { Sequelize } = require('sequelize');
const usuarioModel =  require("../model/municipio")
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.PASSWORD_DB, {
    host: process.env.HOSTDB,
    dialect: process.env.DIALECT 
});

 
// const user =  usuarioModel(sequelize,Sequelize);
const db = {}
db.Sequelize = Sequelize;
db.sequelize =  sequelize;

db.municipio = require("../model/municipio")(sequelize,Sequelize)

db.estado = require("../model/estado")(sequelize,Sequelize)




module.exports = {db};