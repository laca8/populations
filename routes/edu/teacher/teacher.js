const express = require("express");
const eduController = require("../../../controllers/eduController/teacher/teacher");
const router = express.Router();
router.get("/", eduController.getTeachers);
router.post("/", eduController.importData);

module.exports = router;
