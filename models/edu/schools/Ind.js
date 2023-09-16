const mongoose = require("mongoose");
const indSchool = new mongoose.Schema({
  المديرية: {
    type: String,
  },
  العام: {
    type: String,
  },
  حكومي: {
    type: String,
  },
  خاص: {
    type: String,
  },
  حضر: {
    type: String,
  },
  ريف: {
    type: String,
  },
});
module.exports = mongoose.model("indschool", indSchool);
