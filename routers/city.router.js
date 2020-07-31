const cityRouter = require("express").Router();
const { getUsersByCity } = require("../controllers/city.controllers");

cityRouter.route("/:city").get(getUsersByCity);

module.exports = cityRouter;
