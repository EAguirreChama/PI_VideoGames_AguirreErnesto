import axios from "axios"

export const GET_VIDEOGAME_ID = "GET_VIDEOGAME_ID"
export const getVideoGameId = (id) => {
    return async function (dispatch) {
    const result = await axios.get(`http://localhost:3001/videogames/${id}`)
    const videoGameId = result.data;
        dispatch({ type: GET_VIDEOGAME_ID , payload: videoGameId});
    };
};
