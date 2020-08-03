const express = require("express");
const app = express();
const apiRouter = require("./routers/api.router");
const {
  send404,
  handleCustomErrors,
  handleInternalErrors,
} = require("./controllers/errors.controllers");

app.use("/api", apiRouter);

app.use(send404);
app.use(handleCustomErrors);
app.use(handleInternalErrors);

module.exports = app;
