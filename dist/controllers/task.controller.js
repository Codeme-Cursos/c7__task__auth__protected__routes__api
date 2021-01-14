"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTaskById = exports.patchTaskById = exports.createTask = exports.getTaskById = exports.getTasks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _task = _interopRequireDefault(require("../models/task.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var getTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var gotTasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _task["default"].findAll({
              include: {
                model: _user["default"],
                as: 'user',
                attributes: ['id', 'username', 'email']
              }
            });

          case 3:
            gotTasks = _context.sent;
            res.status(200).json({
              data: gotTasks
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: "Error: ".concat(_context.t0)
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getTaskById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, currentTaks, _id, gotTask;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _task["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            currentTaks = _context2.sent;

            if (!currentTaks) {
              _context2.next = 18;
              break;
            }

            _context2.prev = 5;
            _id = req.params.id;
            _context2.next = 9;
            return _task["default"].findOne({
              where: {
                id: _id
              },
              include: {
                model: _user["default"],
                as: 'user',
                attributes: ['id', 'username', 'email']
              }
            });

          case 9:
            gotTask = _context2.sent;
            res.status(200).json({
              data: gotTask
            });
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](5);
            res.status(500).json({
              message: "Error: ".concat(_context2.t0)
            });

          case 16:
            _context2.next = 19;
            break;

          case 18:
            res.status(404).json({
              message: "Tarea no existe"
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 13]]);
  }));

  return function getTaskById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTaskById = getTaskById;

var createTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, responsable, description, userid, postedTask;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, responsable = _req$body.responsable, description = _req$body.description, userid = _req$body.userid;
            _context3.next = 4;
            return _task["default"].create({
              responsable: responsable,
              description: description,
              userid: userid
            }, {
              fields: ['responsable', 'description', 'userid']
            });

          case 4:
            postedTask = _context3.sent;

            if (!postedTask) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              message: "Tarea creada con éxito",
              data: postedTask
            }));

          case 7:
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: "Error: ".concat(_context3.t0)
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function createTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var patchTaskById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, currentTaks, _req$body2, responsable, description, updatedTask;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _task["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            currentTaks = _context4.sent;

            if (!currentTaks) {
              _context4.next = 18;
              break;
            }

            _context4.prev = 5;
            _req$body2 = req.body, responsable = _req$body2.responsable, description = _req$body2.description;
            _context4.next = 9;
            return currentTaks.update({
              responsable: responsable,
              description: description
            });

          case 9:
            updatedTask = _context4.sent;
            res.status(201).json({
              data: updatedTask
            });
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](5);
            res.status(500).json({
              message: "Error: ".concat(_context4.t0)
            });

          case 16:
            _context4.next = 19;
            break;

          case 18:
            res.status(404).json({
              message: "Tarea no existe"
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 13]]);
  }));

  return function patchTaskById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.patchTaskById = patchTaskById;

var deleteTaskById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, currentTaks, deletedTask;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _task["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            currentTaks = _context5.sent;

            if (!currentTaks) {
              _context5.next = 17;
              break;
            }

            _context5.prev = 5;
            _context5.next = 8;
            return _task["default"].destroy({
              where: {
                id: id
              }
            });

          case 8:
            deletedTask = _context5.sent;
            res.status(200).json({
              message: "Tarea eliminada con éxito",
              count: deletedTask,
              deleted: id
            });
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](5);
            res.status(500).json({
              message: "Error: ".concat(_context5.t0)
            });

          case 15:
            _context5.next = 18;
            break;

          case 17:
            res.status(404).json({
              message: "Tarea no existe"
            });

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 12]]);
  }));

  return function deleteTaskById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTaskById = deleteTaskById;