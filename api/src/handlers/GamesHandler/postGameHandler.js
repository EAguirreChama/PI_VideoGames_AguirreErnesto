const postGameController = require ("../../controllers/GamesControllers/postGameController")

const postGameHandler = async (req , res) => {
    try {
        const { name, description, platforms, background_image, released, rating , genres} = req.body
        const newGame = await postGameController(name, description, platforms, background_image, released, rating , genres)
        return res.status(201).json(newGame)
    } catch (error) {
        return res.status(404).json({error: error.message})   
    }
};

module.exports = postGameHandler;
