const byGenreFiltered = require("../../controllers/GenresControllers/byGenreFiltered")

const byGenreFilteredHandler = async (req , res) => {
    try {
        const { id } = req.params
        const allGenres = await byGenreFiltered(id)
        return res.status(200).json(allGenres)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = byGenreFilteredHandler;
