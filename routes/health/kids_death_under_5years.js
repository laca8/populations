const express = require("express");
const kidsController = require("../../controllers/health/kids_death_under_5years");
const router = express.Router();
router.get("/", kidsController.getKids);
router.post("/", kidsController.importData);
module.exports = router;
