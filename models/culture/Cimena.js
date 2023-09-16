const mongoose = require("mongoose");
const cinemaSchema = new mongoose.Schema({
  المحافظة: {
    type: String,
  },
  العام: {
    type: String,
  },
  "عدد السينمات": {
    type: String,
  },
});
module.exports = mongoose.model("cinema", cinemaSchema);
