const mongoose = require("mongoose");
const indClasses = new mongoose.Schema({
  المديرية: {
    type: String,
  },
  السنة: {
    type: String,
  },
  حكومى: {
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
module.exports = mongoose.model("indclasse", indClasses);
