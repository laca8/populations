const express = require("express");
const kidsController = require("../../controllers/health/kids_death_less_than_7days");
const router = express.Router();
router.get("/", kidsController.getKids);
router.get("/:city", kidsController.getKidsByCity);
router.post("/", kidsController.importData);
module.exports = router;
