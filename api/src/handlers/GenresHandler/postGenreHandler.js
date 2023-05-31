import postGenreController from "../../controllers/GenresControllers/postGenreControllers";

const postGenreHandler = async (req, res) => {
    try {

        const { name } = req.body

        const newGenre = await postGenreController(name)

        return res.status(404).json(newGenre)

    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = postGenreHandler