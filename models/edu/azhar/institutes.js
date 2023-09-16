const mongoose = require("mongoose");
const Institutes = new mongoose.Schema({
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
  "عدد المعاهد": {
    type: Number,
  },
});
module.exports = mongoose.model("azharinstitutes", Institutes);
