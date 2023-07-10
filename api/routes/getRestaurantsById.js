const Restaurants = require("../../rest_schema");

module.exports = async function getRestaurants(req, res) {
  try {
    let id = req.params.id;
    const result = await Restaurants.find({ _id: id });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
