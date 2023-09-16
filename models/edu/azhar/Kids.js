const mongoose = require("mongoose");
const Kids = new mongoose.Schema({
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
module.exports = mongoose.model("azharkid", Kids);
