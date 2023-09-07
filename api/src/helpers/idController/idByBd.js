const { Videogame , Genre } = require ("../../db")

const idByBd = async (id) => {
    const data = await Videogame.findOne({
        where: {
            id: id
        },
        include: [{ model: Genre, as: 'genres', through: {
            attributes: []
        }}]})
    
    const VideoGamesId = {
        id: data.id,
        name: data.name,
        description: data.description,
        platforms: data.platforms,
        background_image: data.background_image,
        released: data.released,
        rating: data.rating,
        genres: data.genres
    };
    return VideoGamesId
};

module.exports = idByBd;
