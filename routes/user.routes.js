var express = require('express');
var router = express.Router();

const UserRepository = require('../domain/repository/user.repository')
const UserModel = require("../domain/models/user.model");
const UserController = require("../api/user.controller")

const userRoutes = () => {
  const repository = new UserRepository(UserModel);
  const controller = UserController(repository)

  router.route('/')
  .post(controller.save)
  return router;
}

module.exports = userRoutes;
