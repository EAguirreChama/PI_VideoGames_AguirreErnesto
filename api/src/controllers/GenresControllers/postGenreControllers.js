const { Genre } = require ("../../db");

const postGenreController = async (name) => {
    const newGenre = await Genre.create({
        name
    })
    return newGenre
};

module.exports = postGenreController;
