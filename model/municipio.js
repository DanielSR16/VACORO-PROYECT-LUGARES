module.exports = (sequelize, Sequelize) =>{

    const Municipio = sequelize.define('municipios',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        id_state: Sequelize.INTEGER,
        description: Sequelize.STRING,
    }, { freezeTableName: true, timestamps: false });
    return Municipio;
}
    
    
