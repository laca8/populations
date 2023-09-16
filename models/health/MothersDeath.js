const mongoose = require("mongoose");
const momSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },

  السنة: {
    type: String,
  },

  "وفيات الامهات طبقا لمحل الاقامة": {
    type: Number,
  },
});
module.exports = mongoose.model("mother_death_residence", momSchema);
