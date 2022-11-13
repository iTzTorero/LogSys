const modelo = require('../modelo/camion.js');

class CamionRepository{
    async findAll(){
        const camiones = await modelo.findAll();
        return camiones;
    }

    async findOneById(id){
        const camion = await modelo.findOne({
            where: {id}
        });

        return camion;
    }

    async add(camion){
        camion.id = 0;
        return( await camion.save());
    }

    async update(camion){
        if(camion.id <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await camion.destroy());
        
    }

    async delete(camion){
        return (await camion.destroy());
    }


}

module.exports = CamionRepository;