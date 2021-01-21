"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var authController = _interopRequireWildcard(require("../controllers/auth.controller"));

var router = (0, _express.Router)();
router.post('/login', authController.login);
router.post('/register', authController.register);
var _default = router;
exports["default"] = _default;