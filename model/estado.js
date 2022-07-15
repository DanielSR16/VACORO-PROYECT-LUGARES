module.exports = (sequelize, Sequelize) =>{

    const Estado = sequelize.define('estados',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },

        description: Sequelize.STRING,
        code: Sequelize.STRING,
    }, { freezeTableName: true, timestamps: false });
    return Estado;
}
    
    
