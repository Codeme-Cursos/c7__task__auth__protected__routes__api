"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUserById = exports.getUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var gotUsers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].findAll();

          case 3:
            gotUsers = _context.sent;
            return _context.abrupt("return", res.status(200).json(gotUsers));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: "Error: ".concat(_context.t0)
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var deleteUserById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, currentUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _user["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            currentUser = _context2.sent;

            if (!currentUser) {
              _context2.next = 16;
              break;
            }

            _context2.prev = 5;
            _context2.next = 8;
            return _user["default"].destroy({
              where: {
                id: id
              }
            });

          case 8:
            return _context2.abrupt("return", res.status(200).json({
              message: 'User deleted successfully'
            }));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](5);
            return _context2.abrupt("return", res.status(500).json({
              message: "Error: ".concat(_context2.t0)
            }));

          case 14:
            _context2.next = 17;
            break;

          case 16:
            return _context2.abrupt("return", res.status(404).json({
              message: 'User not found'
            }));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 11]]);
  }));

  return function deleteUserById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteUserById = deleteUserById;