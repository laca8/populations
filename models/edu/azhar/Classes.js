const mongoose = require("mongoose");
const Classes = new mongoose.Schema({
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
  "عدد الفصول": {
    type: Number,
  },
});
module.exports = mongoose.model("azharClasses", Classes);
