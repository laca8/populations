const express = require("express");
const eduController = require("../../controllers/eduController/privateStudent");
const router = express.Router();
router.get("/", eduController.getStudents);
router.get("/:city", eduController.getStuByCity);
router.post("/", eduController.importData);

module.exports = router;
