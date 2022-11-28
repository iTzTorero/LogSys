const CamionRepository = require('../repositorios/CamionRepository.js');
const camionModelo = require('../modelo/camion.js');

const camionRepository = new CamionRepository();

class CamionController {
    async find(req, res){
        const id = req.query.id;
        
        console.log(id);
        if(id > 0){
            const camion = await camionRepository.findOneById(id);
            if(!camion){
                res.json({message: 'Not found'}, 404);
                return;
            }

            return res.json(camion);
            
        }
        const camiones = await camionRepository.findAll();
        return res.json(camiones);
    }

    async add(req, res) {
        const camion = new camionModelo();
        camion.idCamion = 0;
        camion.placas = req.body.placas;
        camion.marca = req.body.marca;
        camion.color = req.body.color;

        await camionRepository.add(camion);

        const json =  camion.toJSON();
       // json.append({result: "Camion registrado correctamente"})
        res.json(json);
    }

    async update(req, res) {
        const { id } = req.query.id;

        const camion = await camionRepository.findOneById(id);
        if(!camion){
            res.json({message: 'Not found'}, 404);
            return;
        }
        camion.placas = req.body.placas;
        camion.marca = req.body.marca;
        camion.color = req.body.color;

        await camionRepository.update(camion);

        const json =  camion.toJSON();
        res.json(json);
    }

    async delete(req, res) {
        const id = req.body.id;
        const camion = await camionRepository.findOneById(id);
        if(!camion){
            res.json({message : 'Not found'}, 404);
            return;
        }

        await camionRepository.delete(camion);

        res.json({deleted: true}, 200);
    }

    

}

module.exports = CamionController;