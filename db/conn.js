const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
  name: String,
  restaurant_id: Number,
  cuisine: String,
});

const Model = mongoose.model("rest", restaurantsSchema);

module.exports = Model;
