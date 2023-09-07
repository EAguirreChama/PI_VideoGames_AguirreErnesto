const { Router } = require ("express");
const getPlatformsHandler = require ("../handlers/PlatformsHandler/getPlatformsHandler");
const getGenresFilterHandler = require ("../handlers/PlatformsHandler/getPlatformsIdHandler")

const PlatformsRout = Router();

// Ruta para obtener todos las plataformas
PlatformsRout.get("/", getPlatformsHandler);
// Ruta para obtener una plataforma
PlatformsRout.get("/:id", getGenresFilterHandler);

module.exports = PlatformsRout;
