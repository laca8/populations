const mongoose = require("mongoose");
const Area = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  السنة: {
    type: String,
  },
  "المساحة الكلية كم2": {
    type: String,
  },
  السكان: {
    type: String,
  },
  "المساحة المأهولة كم2": {
    type: String,
  },
});
module.exports = mongoose.model("areaRate", Area);
