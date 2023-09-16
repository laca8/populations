const express = require("express");
const eduController = require("../../../controllers/eduController/schools/secondary");
const router = express.Router();
router.get("/", eduController.getSchools);
router.get("/:city", eduController.getSchoolsByCity);
router.post("/", eduController.importData);

module.exports = router;
