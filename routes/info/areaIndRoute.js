const express = require("express");
const areaInd = require("../../controllers/info/areaCntrl");
const router = express.Router();
router.get("/", areaInd.getKids);

module.exports = router;
