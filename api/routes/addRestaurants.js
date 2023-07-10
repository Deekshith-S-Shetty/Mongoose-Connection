const Restaurants = require("../../rest_schema");

module.exports = async function addRestaurants(req, res) {
  try {
    const restaurants = new Restaurants({
      name: req.body.name,
      restaurant_id: req.body.restaurant_id,
      rating: req.body.rating,
    });
    let result = await restaurants.save();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
