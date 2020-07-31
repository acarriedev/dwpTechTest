const express = require("express");
const app = express();
const apiRouter = require("./routers/api.router");
const { send404 } = require("./controllers/errors.controllers");

app.use(express.json());

app.use("/api", apiRouter);
app.use(send404);

module.exports = app;
