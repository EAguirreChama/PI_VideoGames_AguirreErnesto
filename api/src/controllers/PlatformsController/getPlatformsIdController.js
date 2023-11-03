require ("dotenv").config();

const axios = require ("axios");
const { API_KEY} = process.env;
const URL = "https://api.rawg.io/api/games";
const { Videogame } = require("../../db");

const getPlatFilterController = async (platformsId) => {
    const apiResponse = await axios(`${URL}?key=${API_KEY}&platforms=${platformsId}`);
    
    const apiData = apiResponse.data.results;

    const dbData = await Videogame.findAll();

    const allData = [...dbData, ...apiData];
    
    return allData;
};

module.exports = getPlatFilterController;
