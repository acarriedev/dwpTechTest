const usersRouter = require("express").Router();
const { getUsersByCity } = require("../controllers/users.controllers");
const { handle405s } = require("../controllers/errors.controllers");

usersRouter.route("/:city").get(getUsersByCity).all(handle405s);

module.exports = usersRouter;
