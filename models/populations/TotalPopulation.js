const mongoose = require("mongoose");
const totalPopulationSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model("totalpopulation", totalPopulationSchema);
