const express = require("express");
const eduController = require("../../../controllers/eduController/classes/special");
const router = express.Router();
router.get("/", eduController.getClasses);
router.get("/:city", eduController.getClassesByCity);
router.post("/", eduController.importData);

module.exports = router;
