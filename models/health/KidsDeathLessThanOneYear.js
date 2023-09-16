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
  "وفيات الاطفال الرضع ( أقل من سنة )": {
    type: Number,
  },
});
module.exports = mongoose.model("kids_death_less_than_one_year", kidsSchema);
