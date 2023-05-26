const { Router } = require('express');
const VideoGamesRout  = require("./videoGamesRout");
const GenresRout = require("./genresRout");
const PlatformsRout = require("./platformsRout");
// Importar todos los routers;

const router = Router();

// Configurar los routers
router.use("/videogames" , VideoGamesRout); 
router.use("/genres" , GenresRout);
router.use("/platforms" , PlatformsRout);

module.exports = router;
