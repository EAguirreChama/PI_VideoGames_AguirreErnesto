require("dotenv").config()

const axios = require ("axios")
const { API_KEY } = process.env
const URL = "https://api.rawg.io/api/games"

const idByApi = async (id) => {
    const { data } = await axios.get(`${URL}/${id}?key=${API_KEY}`)
    
    const VideoGamesApi = {
        id: data.id,
        name: data.name,
        description: data.description,
        platforms: data.platforms,
        background_image: data.background_image,
        released: data.released,
        rating: data.rating,
        genres: data.genres
    };
    return VideoGamesApi
};

module.exports = idByApi;
