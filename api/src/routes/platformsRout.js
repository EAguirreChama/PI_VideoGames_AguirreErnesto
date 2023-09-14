const { Router } = require ("express");

const PlatformsRout = Router();

const getPlatformsHandler = require ("../handlers/PlatformsHandler/getPlatformsHandler");
const getGenresFilterHandler = require ("../handlers/PlatformsHandler/getPlatformsIdHandler")

// Ruta para obtener todos las plataformas
PlatformsRout.get("/", getPlatformsHandler);

// Ruta para obtener una plataforma
PlatformsRout.get("/:id", getGenresFilterHandler);

module.exports = PlatformsRout;
