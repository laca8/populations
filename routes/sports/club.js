const express = require("express");
const Controller = require("../../controllers/sports/clubControll");
const router = express.Router();
router.get("/", Controller.getClubs);
router.post("/", Controller.importData);

module.exports = router;
