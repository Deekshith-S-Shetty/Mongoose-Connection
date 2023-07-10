const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
  name: String,
  restaurant_id: Number,
  rating: Number,
});

module.exports = mongoose.model("rest", restaurantsSchema);
