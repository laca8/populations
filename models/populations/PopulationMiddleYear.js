const mongoose = require("mongoose");
const populationMiddleYearSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "city required"],
  },
});
module.exports = mongoose.model(
  "populationmiddleyears",
  populationMiddleYearSchema
);
