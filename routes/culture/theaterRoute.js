const express = require("express");
const Controller = require("../../controllers/culture/theaterController");
const router = express.Router();
router.get("/", Controller.getTheaters);
router.post("/", Controller.importData);

module.exports = router;
