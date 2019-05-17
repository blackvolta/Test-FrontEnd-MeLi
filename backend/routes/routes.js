const express = require("express");
const meliRouter = express.Router();

const detail = require("./detail");
const list = require("./list");

meliRouter.get("/items", list);

meliRouter.get("/items/:id", detail);

module.exports = meliRouter;
