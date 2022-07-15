const municipioModel =  require('../db/connection')

const Municipio = municipioModel.db.municipio


    async function allMunicipios(estado){
        try {
            all_municipos = await Municipio.findAll({
                where:{
                    id_state : estado.id
                },
                attributes: ['description']
            });
            return all_municipos;
            
        } catch (error) {
            return error
        }
    }


    

controller = {}

controller.getAll = allMunicipios









module.exports = {controller}