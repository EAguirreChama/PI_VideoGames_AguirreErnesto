const { Router } = require('express');

// Importar todos los routers;
const VideoGamesRout  = require("./videoGamesRout");
const GenresRout = require("./genresRout");
const PlatformsRout = require("./platformsRout");

const router = Router();

// Configurar los routers
router.use("/videogames" , VideoGamesRout); 
router.use("/genres" , GenresRout);
router.use("/platforms" , PlatformsRout);

module.exports = router;
