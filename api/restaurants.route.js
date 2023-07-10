const express = require("express");
const getRestaurants = require("../api/routes/getRestaurants");

const router = express.Router();

router.route("/").get(getRestaurants);

module.exports = router;
