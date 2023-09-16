const mongoose = require("mongoose");
const kidsSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  "محل الإقامة": {
    type: String,
  },

  السنة: {
    type: String,
  },
  النوع: {
    type: String,
  },
  "وفيات المواليد المبكرة ( أقل من 7 أيام )": {
    type: Number,
  },
});
module.exports = mongoose.model("kids_death_less_than_7_days", kidsSchema);
