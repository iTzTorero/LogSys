const PrestamoRepository = require('../repositorios/PrestamoRepository');
const prestamoModelo = require('../modelo/prestamo.js');

const prestamoRepository = new PrestamoRepository();

class PrestamoController {
    async find(req, res){
        const id = req.query.id;
        
        //console.log(id);
        if(id > 0){
            const prestamo = await prestamoRepository.findOneById(id);
            if(!prestamo){
                res.json({message: 'Not found'}, 404);
                return;
            }

            return res.json(prestamo);
            
        }
        const prestamos = await prestamoRepository.findAll();
        return res.json(prestamos);
    }

    async add(req, res) {
        const prestamo = new prestamoModelo();
        prestamo.idPrestamo = 0;
        prestamo.monto = req.body.monto;
        //prestamo.fecha = req.body.fecha;
        prestamo.detalle = req.body.detalle;
        prestamo.idChofer = req.body.idChofer;
        

        await prestamoRepository.add(prestamo);

        const json =  prestamo.toJSON();
       // json.append({result: "Camion registrado correctamente"})
        res.json(json);
    }

    async update(req, res) {
        const  id  = req.body.id;
        if(!id){
            res.json({message: 'Not id found'}, 404);
            return;
        }

        const prestamo = await prestamoRepository.findOneById(id);
        if(!prestamo){
            res.json({message: 'Not found'}, 404);
            return;
        }

        //console.log(prestamo);
        prestamo.monto = req.body.monto;
        prestamo.fecha = req.body.fecha;
        prestamo.detalle = req.body.detalle;
        prestamo.idChofer = req.body.idChofer;

        await prestamoRepository.update(prestamo);

        const json =  prestamo.toJSON();
        res.json(json);
    }

    async delete(req, res) {
        const id = req.body.id;
        if(!id){
            res.json({message: 'Not id found'}, 404);
            return;
        }

        const prestamo = await prestamoRepository.findOneById(id);
        if(!prestamo){
            res.json({message : 'Not found'}, 404);
            return;
        }

        await prestamoRepository.delete(prestamo);

        res.json({deleted: true}, 200);
    }

    

}

module.exports = PrestamoController;