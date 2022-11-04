const express = require("express");
const routes = express.Router();

const { fibonacciController } = require("../controllers");

routes.get("/fibonacci", fibonacciController.getFibonacci);

module.exports = routes;
