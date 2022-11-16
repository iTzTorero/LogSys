const modelo = require('../modelo/pedido.js');

class PedidosRepository{
    async findAll(){
        const pedidos = await modelo.findAll();
        return pedidos;
    }

    async findOneById(idPedido){
        const pedido = await modelo.findOne({
            where: {idPedido: idPedido}
        });

        return pedido;
    }

    async add(pedido){
        pedido.idPedido = 0;
        return( await pedido.save());
    }

    async update(pedido){
        if(pedido.idPedido <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await pedido.save());
        
    }

    async delete(pedido){
        return (await pedido.destroy());
    }


}

module.exports = PedidosRepository;