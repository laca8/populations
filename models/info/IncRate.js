const mongoose = require("mongoose");
const IncRate = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  السنة: {
    type: String,
  },
  "معدل التزاحم": {
    type: String,
  },
});
module.exports = mongoose.model("inc_rate", IncRate);
