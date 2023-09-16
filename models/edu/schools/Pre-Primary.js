const mongoose = require("mongoose");
const preprimarySchool = new mongoose.Schema({
  المديرية: {
    type: String,
  },
  العام: {
    type: String,
  },
  "تبعية المدارس": {
    type: String,
  },
  "محل الاقامة": {
    type: String,
  },
  "عدد المدارس": {
    type: String,
  },
});
module.exports = mongoose.model("preprimaryschool", preprimarySchool);
