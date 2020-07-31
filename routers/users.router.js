const usersRouter = require("express").Router();
const cityRouter = require("./city.router");

usersRouter.use("/city", cityRouter);

module.exports = usersRouter;
