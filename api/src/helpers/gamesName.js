require ("dotenv").config()

const axios = require ("axios")
const { Videogame } = require ("../db")
const { Op } = require ("sequelize")
const { API_KEY } = process.env

const URL = "https://api.rawg.io/api/games"

const gamesName = async (name) => {
    const ResultadosDb = await Videogame.findAll
    ({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            };
        };
    });
    const { data }  = await axios.get (`${URL}?key=${API_KEY}&search=${name}`)
    
    return [...ResultadosDb, ...data.results]
};

module.exports = gamesName;
