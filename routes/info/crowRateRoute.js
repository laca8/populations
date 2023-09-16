const express = require("express");
const crowRateCntrl = require("../../controllers/info/crowRateCntrl");
const router = express.Router();
router.get("/", crowRateCntrl.getKids);

module.exports = router;
