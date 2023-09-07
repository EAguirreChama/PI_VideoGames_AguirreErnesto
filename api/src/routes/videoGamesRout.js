const { Router } = require ("express");

const allGamesHandler = require ("../handlers/GamesHandler/allGamesHandler");
const idGameHandler = require ("../handlers/GamesHandler/idGameHandler");
const postGameHandler = require ("../handlers/GamesHandler/postGameHandler");
const deleteGameHandler = require ("../handlers/GamesHandler/deleteGameHandler")

const VideoGamesRout = Router();

// Rutas

// Ruta para traer todos los VideoGames con su informacion y buscar por nombre
VideoGamesRout.get("/" , allGamesHandler);
// Ruta para traer un VideoGame por su Id
VideoGamesRout.get("/:idVideogame" , idGameHandler);
// Ruta para crear un VideoGame con los datos necesarios
VideoGamesRout.post("/" , postGameHandler);
// Ruta para eliminar un VideoGame por su Id de la Base de Datos
VideoGamesRout.delete("/:idVideogame" , deleteGameHandler)

module.exports = VideoGamesRout;
