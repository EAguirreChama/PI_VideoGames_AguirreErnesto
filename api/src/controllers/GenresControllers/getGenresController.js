require("dotenv").config()

const axios = require("axios")
const { API_KEY } = process.env
const URL = "https://api.rawg.io/api/genres"
const { Genre } = require("../../db")

const getGenresController = async () => {
    let dbGenres = await Genre.findAll()
    if (!dbGenres.length) {
        const { data } = await axios.get(`${URL}?key=${API_KEY}`)
        for (const result of data.results) {
            await Genre.create({
                name: result.name,
            });
        };
        return Genre.findAll();
    };
    return dbGenres
};

module.exports = getGenresController;
