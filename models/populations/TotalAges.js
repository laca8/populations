const mongoose = require("mongoose");
const TotalAges = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("age18under", TotalAges);
