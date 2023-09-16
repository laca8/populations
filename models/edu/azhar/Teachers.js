const mongoose = require("mongoose");
const Teachers = new mongoose.Schema({
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
  "عدد المدرسين": {
    type: Number,
  },
});
module.exports = mongoose.model("azharteachers", Teachers);
