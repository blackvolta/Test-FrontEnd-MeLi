const express = require("express");
const meliRouter = express.Router();

const detail = require("./detail");
const list = require("./list");

meliRouter.get("/api/items", list);

meliRouter.get("/api/items/:id", detail);

module.exports = meliRouter;
