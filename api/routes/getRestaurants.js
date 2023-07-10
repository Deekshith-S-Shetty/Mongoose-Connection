const Restaurants = require("../../rest_schema");

module.exports = async function getRestaurants(req, res) {
  try {
    const result = await Restaurants.find({});
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
