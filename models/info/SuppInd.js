const mongoose = require("mongoose");
const suppInd = new mongoose.Schema({
  المحافظات: {
    type: String,
  },
  "نسبة صغار السن(أقل من 15)": {
    type: String,
  },
  "نسبة كبار السن (65 فأكثر)": {
    type: String,
  },
});
module.exports = mongoose.model("supp_ind", suppInd);
