const express = require("express");
const indPopCntrl = require("../../controllers/info/indPopCntrl");
const router = express.Router();
router.get("/", indPopCntrl.getKids);

module.exports = router;
