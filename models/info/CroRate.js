const mongoose = require("mongoose");
const CrowRate = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  السنة: {
    type: String,
  },
  "متوسط حجم الأسرة": {
    type: String,
  },
});
module.exports = mongoose.model("crow_rate", CrowRate);
