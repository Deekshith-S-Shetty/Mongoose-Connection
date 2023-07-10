const express = require("express");
const getRestaurants = require("../api/routes/getRestaurants");
const getRestaurantsById = require("./routes/getRestaurantsById");
const addRestaurants = require("./routes/addRestaurants");

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/id/:id").get(getRestaurantsById);
router.route("/add").post(addRestaurants);

module.exports = router;
