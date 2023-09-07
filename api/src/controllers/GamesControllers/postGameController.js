const { Videogame } = require("../../db")
const { Genre } = require("../../db")

const postGameController = async (name, description, platforms, background_image, released, rating, genres) => {
    let generos = []
    for (const genreId of genres) {
        const genre = await Genre.findOne({ where: { id: genreId } });
        generos.push(genre);
    };
    let newVideoId = ""
    await Videogame.create({
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
    }).then(async (videogame) => {
        newVideoId = videogame.id
        await videogame.setGenres(generos);
    });
    const gameCreate = await Videogame.findOne({
        where: {
            id: newVideoId
        },
        include: [{ model: Genre, as: 'genres' }] // as es una asociacion que hago con el modelo
    });
    return gameCreate
};

module.exports = postGameController
