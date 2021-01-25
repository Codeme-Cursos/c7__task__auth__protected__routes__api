"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var taskController = _interopRequireWildcard(require("../controllers/task.controller"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verifyToken"));

var router = (0, _express.Router)();
router.get('/tasks', taskController.getTasks);
router.get('/task/:id', taskController.getTaskById);
router.post('/tasks', _verifyToken["default"], taskController.createTask);
router.patch('/task/:id', _verifyToken["default"], taskController.patchTaskById);
router["delete"]('/task/:id', _verifyToken["default"], taskController.deleteTaskById);
var _default = router;
exports["default"] = _default;