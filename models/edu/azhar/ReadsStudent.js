const mongoose = require("mongoose");
const ReadsStudent = new mongoose.Schema({
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
module.exports = mongoose.model("azharreadsstudent", ReadsStudent);
