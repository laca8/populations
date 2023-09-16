const express = require("express");
const Controller = require("../../controllers/culture/cinemaController");
const router = express.Router();
router.get("/", Controller.getCinema);
router.post("/", Controller.importData);

module.exports = router;
