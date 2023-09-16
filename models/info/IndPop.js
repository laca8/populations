const mongoose = require("mongoose");
const IndPop = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  السنة: {
    type: String,
  },
  "الإعالة الصغرى": {
    type: String,
  },
  "الإعالة الكبرى": {
    type: String,
  },
  "الإعالة الكلية": {
    type: String,
  },
  "نسبة صغار السن": {
    type: String,
  },
  "نسبة النوع": {
    type: String,
  },
  "نسبة الحضر": {
    type: String,
  },
  "الكثافة المأهولة": {
    type: String,
  },
  "نسبة المساحة المأهولة للمساحة الكلية": {
    type: String,
  },
});
module.exports = mongoose.model("ind_pop", IndPop);
