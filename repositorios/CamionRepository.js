const modelo = require('../modelo/camion.js');

class CamionRepository{
    async findAll(){
        const camiones = await modelo.findAll();
        return camiones;
    }

    async findOneById(idCamion){
        const camion = await modelo.findOne({
            where: {idCamion}
        });

        return camion;
    }

    async add(camion){
        camion.idCamion = 0;
        return( await camion.save());
    }

    async update(camion){
        if(camion.idCamion <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await camion.save());
        
    }

    async delete(camion){
        return (await camion.destroy());
    }


}

module.exports = CamionRepository;