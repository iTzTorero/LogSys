const PedidoRepository = require('../repositorios/PedidoRepository.js');
const pedidoModelo = require('../modelo/pedido.js');

const pedidoRepository = new PedidoRepository();

class PedidoController {
    async find(req, res){
        const id = req.query.id;
        
        console.log(id);
        if(id > 0){
            const pedido = await pedidoRepository.findOneById(id);
            if(!pedido){
                res.json({message: 'Not found'}, 404);
                return;
            }

            return res.json(pedido);
            
        }
        const pedidos = await pedidoRepository.findAll();
        return res.json(pedidos);
    }

    async add(req, res) {
        const pedido = new pedidoModelo();
        pedido.idPedido = 0;
        pedido.precioKg = req.body.precioKg;
        pedido.nPedido = req.body.nPedido;

        await pedidoRepository.add(pedido);

        const json =  pedido.toJSON();
        res.json(json);
    }

    async update(req, res) {
        const { id } = req.query.id;

        const pedido = await pedidoRepository.findOneById(id);
        if(!pedido){
            res.json({message: 'Not found'}, 404);
            return;
        }
        pedido.precioKg = req.body.precioKg;
        pedido.nPedido = req.body.nPedido;

        await pedidoRepository.update(pedido);

        const json =  pedido.toJSON();
        res.json(json);
    }

    async delete(req, res) {
        const { id } = req.query.id;

        const pedido = await pedidoRepository.findOneById(id);
        if(!pedido){
            res.json({message : 'Not found'}, 404);
            return;
        }

        await pedidoRepository.delete(pedido);

        res.json({deleted: true}, 200);
    }

    

}

module.exports = PedidoController;