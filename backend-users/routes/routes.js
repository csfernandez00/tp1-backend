const express = require("express");
const routes = express.Router();

const { usersController } = require("../controllers");

routes.get("/users", usersController.getUsers);
routes.post("/users", usersController.createUser);
routes.put("/users", usersController.updateUser);
routes.delete("/users/:id", usersController.deleteUser);

module.exports = routes;
