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
  "وفيات الاطفال حديثى الولادة ( أقل من 28 يوم )": {
    type: Number,
  },
});
module.exports = mongoose.model(
  "kids_death__new_born_less_than_28_days",
  kidsSchema
);
