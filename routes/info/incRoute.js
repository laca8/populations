const express = require("express");
const incRateCntrl = require("../../controllers/info/incRateCntrl");
const router = express.Router();
router.get("/", incRateCntrl.getKids);

module.exports = router;
