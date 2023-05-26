const { Videogame } = require ("../../db")

const deleteGameController = async (id) => {
    if(isNaN(+id)){

        const game = await Videogame.findByPk(id)

        if(!game) throw Error ("Juego no encontrado")

        await Videogame.destroy({where: {id: id}})
        
        return ("El Juego se elimino correctamente")

    } else {
        throw Error (`El Id: ${id} es incorrecto`)
    }
}

module.exports = deleteGameController