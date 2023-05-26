const getPlatformsControllers = require("../../controllers/PlatformsController/getPlatformsController");

const getPlatformsHandler = async (req , res) => {
    try {
        
        const allPlatforms = await getPlatformsControllers();

        return res.status(200).json(allPlatforms);

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = getPlatformsHandler