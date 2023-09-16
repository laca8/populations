const express = require("express");
const areaInd = require("../../controllers/indsRate/areaRateCntrl");
const router = express.Router();
router.get("/", areaInd.getKids);

module.exports = router;
