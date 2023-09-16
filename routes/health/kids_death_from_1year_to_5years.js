const express = require("express");
const kidsController = require("../../controllers/health/kids_death_from_year_to_5years");
const router = express.Router();
router.get("/", kidsController.getKids);
router.get("/:city", kidsController.getKidsByCity);
router.post("/", kidsController.importData);
module.exports = router;
