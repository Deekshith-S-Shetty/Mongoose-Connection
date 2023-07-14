const restaurants = require("../../rest_schema");

module.exports = async function updateRestaurants(req, res) {
  try {
    const id = req.params.id;
    let restaurant = await restaurants.findById(id);
    restaurant.rating = 7;
    const result = await restaurant.save();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
