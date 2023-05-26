const axios = require ("axios");
require ("dotenv").config();
const { API_KEY} = process.env;
const URL = "https://api.rawg.io/api/platforms/lists/parents"

const getPlatformsControllers = async () => {
    const { data } = await axios.get(`${URL}?key=${API_KEY}`);
    const platforms = data.results
    return platforms;
};

module.exports = getPlatformsControllers