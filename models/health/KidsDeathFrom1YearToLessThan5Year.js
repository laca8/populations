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
  "وفيات الاطفال (من سنة - أقل من 5 سنوات)": {
    type: Number,
  },
});
module.exports = mongoose.model("kids_death_from_year_to_5year", kidsSchema);
