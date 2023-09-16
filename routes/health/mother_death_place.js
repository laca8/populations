const express = require("express");
const momController = require("../../controllers/health/mother_death_place");
const router = express.Router();
router.get("/", momController.getMothers);
router.post("/", momController.importData);
module.exports = router;
