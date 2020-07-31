const cityRouter = require("express").Router();
const { getUsersByCity } = require("../controllers/city.controllers");
const { handle405s } = require("../controllers/errors.controllers");

cityRouter.route("/:city").get(getUsersByCity).all(handle405s);

module.exports = cityRouter;
