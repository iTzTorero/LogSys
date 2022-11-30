const ChoferRepository = require('../repositorios/ChoferRepository.js');
const choferModelo = require('../modelo/chofer.js');

const choferRepository = new ChoferRepository();

class ChoferController {
    async find(req, res){
        const id = req.body.id;
        
        console.log(id);
        if(id > 0){
            const chofer = await choferRepository.findOneById(id);
            if(!chofer){
                res.json({message: 'Not found'}, 404);
                return;
            }

            return res.json(chofer);
            
        }
        const choferes = await choferRepository.findAll();
        return res.json(choferes);
    }

    async add(req, res) {
        const chofer = new choferModelo();
        chofer.idChofer = 0;
        chofer.nombre = req.body.nombre;
        await choferRepository.add(chofer);

        const json =  chofer.toJSON();
        res.json(json);
    }

    async update(req, res) {
        const { id } = req.query.id;

        const chofer = await choferRepository.findOneById(id);
        if(!chofer){
            res.json({message: 'Not found'}, 404);
            return;
        }
        chofer.nombre = req.body.nombre;

        await choferRepository.update(chofer);

        const json =  chofer.toJSON();
        res.json(json);
    }

    async delete(req, res) {
        const { id } = req.query.id;

        const chofer = await choferRepository.findOneById(id);
        if(!chofer){
            res.json({message : 'Not found'}, 404);
            return;
        }

        await choferRepository.delete(chofer);

        res.json({deleted: true}, 200);
    }

    

}

module.exports = ChoferController;