const modelo = require('../modelo/chofer.js');

class ChoferRepository{
    async findAll(){
        const choferes = await modelo.findAll();
        return choferes;
    }

    async findOneById(idChofer){
        const chofer = await modelo.findOne({
            where: {idChofer: idChofer}
        });

        return chofer;
    }

    async add(chofer){
        chofer.idChofer = 0;
        return( await chofer.save());
    }

    async update(chofer){
        if(chofer.idChofer <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await chofer.save());
        
    }

    async delete(chofer){
        return (await chofer.destroy());
    }


}

module.exports = ChoferRepository;