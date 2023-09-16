const mongoose = require("mongoose");
const CommunityStudent = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  النوع: {
    type: String,
  },
  "تبعية المدرسة": {
    type: String,
  },
  السنة: {
    type: String,
  },
  "عدد التلاميذ": {
    type: String,
  },
  "محل الإقامة": {
    type: String,
  },
});
module.exports = mongoose.model("communitystudent", CommunityStudent);
