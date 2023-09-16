const mongoose = require("mongoose");
const Disabled = new mongoose.Schema({
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
module.exports = mongoose.model("azhardisabled", Disabled);
