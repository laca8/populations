const express = require("express");
const suppInd = require("../../controllers/info/suppInd");
const router = express.Router();
router.get("/", suppInd.getKids);

module.exports = router;
