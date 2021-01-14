"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var taskController = _interopRequireWildcard(require("../controllers/task.controller"));

var router = (0, _express.Router)();
router.get('/tasks', taskController.getTasks);
router.get('/task/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);
router.patch('/task/:id', taskController.patchTaskById);
router["delete"]('/task/:id', taskController.deleteTaskById);
var _default = router;
exports["default"] = _default;