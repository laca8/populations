const express = require("express");
const popController = require("../../controllers/population/totalPopulationController");
const router = express.Router();
router.get("/", popController.getPopulations);
router.post("/", popController.importData);

module.exports = router;
