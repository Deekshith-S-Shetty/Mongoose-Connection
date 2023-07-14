const restaurants = require("../../rest_schema");

module.exports = async function deleteRestaurants(req, res) {
  try {
    const id = req.params.id;
    const result = await restaurants.deleteOne({ _id: id });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
