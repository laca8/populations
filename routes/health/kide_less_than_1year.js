const express = require("express");
const kidsController = require("../../controllers/health/kids_less_than_1year");
const router = express.Router();
router.get("/", kidsController.getKids);
router.get("/:city", kidsController.getKidsByCity);
router.post("/", kidsController.importData);
module.exports = router;
