"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userController = _interopRequireWildcard(require("../controllers/user.controller"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verifyToken"));

var router = (0, _express.Router)();
router.get('/users', userController.getUsers);
router["delete"]('/user/:id', _verifyToken["default"], userController.deleteUserById);
var _default = router;
exports["default"] = _default;