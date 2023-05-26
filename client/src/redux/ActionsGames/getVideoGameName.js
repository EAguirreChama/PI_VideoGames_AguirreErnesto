import axios from "axios"

export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAMES_NAME"

export const getVideoGameName = (name) => {

    return async function (dispatch) {
        const result = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        const videoGameName = result.data;

            dispatch({ type: GET_VIDEOGAMES_NAME , payload: videoGameName})
    };
};