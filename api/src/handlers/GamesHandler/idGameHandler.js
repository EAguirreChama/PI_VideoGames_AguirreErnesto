const idGameController = require ("../../controllers/GamesControllers/idGameController")
const idGameHandler = async (req , res) => {
    const { idVideogame} = req.params
    try {
        
        const idGame = await idGameController(idVideogame)

        if(idGame) return res.status(200).json(idGame)
        else throw Error (`No existe juego con Id: ${id}`)

    } catch (error) {
        return res.status(400).json({error : error.message})
    }
};

module.exports = idGameHandler;