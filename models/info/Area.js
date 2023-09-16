const mongoose = require("mongoose");
const Area = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  الكلية: {
    type: String,
  },
  "% المساحة": {
    type: String,
  },
  "المســاحة كم)1( 2": {
    type: String,
  },
  الســكــان: {
    type: String,
  },
  "الكثافة المأهولة": {
    type: String,
  },
});
module.exports = mongoose.model("area_ind", Area);
