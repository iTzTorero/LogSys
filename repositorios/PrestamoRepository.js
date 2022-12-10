const modelo = require('../modelo/prestamo.js');

class PrestamoRepository{
    async findAll(){
        const prestamos = await modelo.findAll();
        return prestamos;
    }

    async findOneById(idPrestamo){
        const prestamo = await modelo.findOne({
            where: {idPrestamo: idPrestamo}
        });

        return prestamo;
    }

    async add(prestamo){
        prestamo.idPrestamo = 0;
        return( await prestamo.save());
    }

    async update(prestamo){
        if(prestamo.idPrestamo <= 0)
            throw new Error('Expecting user to have a valid id');

        return (await prestamo.save());
        
    }

    async delete(prestamo){
        return (await prestamo.destroy());
    }


}

module.exports = PrestamoRepository;