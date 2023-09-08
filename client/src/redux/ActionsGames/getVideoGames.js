import axios from "axios"

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const getVideoGames = () => {
    return async function (dispatch) {
    const apiData = await axios.get ("http://localhost:3001/videogames")
    const videoGames = apiData.data;
        dispatch ({ type: GET_VIDEOGAMES , payload: videoGames});
    };
};
