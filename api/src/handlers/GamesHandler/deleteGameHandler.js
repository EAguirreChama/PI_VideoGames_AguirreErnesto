const deleteGameController = require ("../../controllers/GamesControllers/deleteGameController")

const deleteGameHandler = async (req , res) => {
    const id = req.params
    try {
        
        const game = await deleteGameController(id.idVideogame)

        return res.status(200).json({Mensaje: game})

    } catch (error) {
        return res.status(400).json({error: "Error al eliminar el juego"})
    }
}

module.exports = deleteGameHandler