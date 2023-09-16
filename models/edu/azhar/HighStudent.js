const mongoose = require("mongoose");
const HighStudents = new mongoose.Schema({
  المنطقة: {
    type: String,
  },
  العام: {
    type: String,
  },
  النوع: {
    type: String,
  },
  المرحلة: {
    type: String,
  },
  "محل الاقامة": {
    type: String,
  },
  "عدد الطلاب": {
    type: Number,
  },
});
module.exports = mongoose.model("azharhighstudent", HighStudents);
