const estadoModel =  require('../db/connection')

const Estado = estadoModel.db.estado


    async function allEstados(){
        try {
            all_municipos = await Estado.findAll({
                attributes: ['description']
            });
            return all_municipos;
            
        } catch (error) {
            return error
        }
    }


    

controller = {}

controller.getAll = allEstados









module.exports = {controller}