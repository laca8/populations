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
  "وفيات الاطفال (دون الخامسة)": {
    type: Number,
  },
});
module.exports = mongoose.model("kids_death_under_5", kidsSchema);
