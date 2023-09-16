const express = require("express");
const Controller = require("../../controllers/sports/councilControll");
const router = express.Router();
router.get("/", Controller.getCouncil);
router.post("/", Controller.importData);

module.exports = router;
