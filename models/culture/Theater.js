const mongoose = require("mongoose");
const theaterSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  العام: {
    type: String,
  },
  "عدد المسارح": {
    type: String,
  },
});
module.exports = mongoose.model("theater", theaterSchema);
