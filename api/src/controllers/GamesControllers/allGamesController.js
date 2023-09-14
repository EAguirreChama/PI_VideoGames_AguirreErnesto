require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../../db");
const URL = "https://api.rawg.io/api/games";

const allGamesController = async () => {

  // Obtener datos de la API a travez de promesas
  const promises = [
    axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=40`
    ),
    axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`
    ),
    axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=40`
      ),
    ];
    
const results = [];

await Promise.all(promises)
    .then((response) => {
        response.forEach(({ data }) => {
            data.results.forEach((game) => {
                results.push(game);
            });
        });
    })
    .catch((error) => {
        throw new Error(error);
    });

  // Obtengo datos de la base de datos
  const dbData = await Videogame.findAll({
    include: [{ model: Genre, as: 'genres' }]
  });

  // Combino los datos de la API y la base de datos
  const allData = [...dbData, ...results];
  return allData;
};

module.exports = allGamesController;
