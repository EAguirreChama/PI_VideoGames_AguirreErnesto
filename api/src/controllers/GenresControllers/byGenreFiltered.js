require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame } = require("../../db");
const URL = "https://api.rawg.io/api/games";

const byGenreFiltered = async (genreId) => {
  
  // Obtener datos de la API
  const apiResponse = await axios(`${URL}?key=${API_KEY}&genres=${genreId}`);
  const apiData = apiResponse.data.results;

  // Obtengo datos de la base de datos
  const dbData = await Videogame.findAll();
  // Combino los datos de la API y la base de datos
  const allData = [...dbData, ...apiData];
  //console.log(allData.length);
  return allData;

};

module.exports = byGenreFiltered;