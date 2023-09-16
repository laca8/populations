const express = require("express");
const popController = require("../../controllers/population/populationMiddleYearController");
const router = express.Router();
router.get("/:city", popController.getPopulations);
router.post("/", popController.importData);

module.exports = router;
