const { Router } = require("express")
const getGenresHandler = require("../handlers/GenresHandler/getGenresHandler")
const byGenreFilteredHandler = require ("../handlers/GenresHandler/getGenresFilterHandler")

const GenerosRout = Router();

// Ruta para obtener todos los generos
GenerosRout.get("/", getGenresHandler);

// Ruta para obtener un genero
GenerosRout.get("/:id", byGenreFilteredHandler);

module.exports = GenerosRout;