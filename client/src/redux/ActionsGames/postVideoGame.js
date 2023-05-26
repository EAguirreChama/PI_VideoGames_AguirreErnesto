import axios from "axios";

export const POST_VIDEOGAME = "POST_VIDEOGAME"

export const postVideoGame = (form) => {
  return async function (dispatch) {
    try {
      const result = await axios.post("http://localhost:3001/videogames", form);
      const postVideo = result.data;
      console.log(postVideo);
      dispatch({ type: POST_VIDEOGAME, payload: postVideo });
      alert("Videogame creado exitosamente");
    } catch (error) {
      alert("Error al crear el videogame");
    }
  };
};