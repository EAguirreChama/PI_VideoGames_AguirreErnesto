const allGamesController  = require ("../../controllers/GamesControllers/allGamesController");
const games15Controller = require ("../../controllers/GamesControllers/games15Controller")

const allGamesHandler = async (req , res) => {
    try {
      const { name } = req.query

      if(!name) {
        const allVideoGames = await allGamesController()
        return res.status(200).json(allVideoGames)
      } else {
        const Resultado = await games15Controller(name)
        return res.status(200).json(Resultado)
      }
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
  };
  
  module.exports = allGamesHandler;
