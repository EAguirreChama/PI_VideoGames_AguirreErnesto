const getGenresController = require("../../controllers/GenresControllers/getGenresController");

const getGenresHandler = async (req , res) => {
    try {
        const allGenres = await getGenresController();
        
        return res.status(200).json(allGenres);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = getGenresHandler;
