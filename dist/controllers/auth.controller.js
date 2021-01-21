"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var register = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, email, password, user, salt, encryptedPassword, registeredUser;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
            _context.next = 3;
            return _user["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 23;
              break;
            }

            _context.prev = 5;
            _context.next = 8;
            return _bcryptjs["default"].genSalt(8);

          case 8:
            salt = _context.sent;
            _context.next = 11;
            return _bcryptjs["default"].hash(password, salt);

          case 11:
            encryptedPassword = _context.sent;
            _context.next = 14;
            return _user["default"].create({
              username: username,
              email: email,
              password: encryptedPassword
            }, {
              fields: ['username', 'email', 'password']
            });

          case 14:
            registeredUser = _context.sent;
            return _context.abrupt("return", res.status(201).json(registeredUser));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", res.status(500).json({
              message: "Error: ".concat(_context.t0)
            }));

          case 21:
            _context.next = 24;
            break;

          case 23:
            return _context.abrupt("return", res.status(500).json({
              message: 'Email already exist'
            }));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 18]]);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = register;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, user, checkPassword, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 3;
            return _user["default"].findOne({
              where: {
                email: email
              }
            });

          case 3:
            user = _context2.sent;

            if (!user) {
              _context2.next = 22;
              break;
            }

            _context2.prev = 5;
            _context2.next = 8;
            return _bcryptjs["default"].compare(password, user.password);

          case 8:
            checkPassword = _context2.sent;
            token = _jsonwebtoken["default"].sign({
              user: user
            }, process.env.JWT_SECRET, {
              expiresIn: 86400 //24 hours in seconds

            });

            if (!checkPassword) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              user: {
                username: user.username,
                email: user.email
              },
              token: token
            }));

          case 14:
            return _context2.abrupt("return", res.status(400).json({
              message: 'Wrong password'
            }));

          case 15:
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](5);
            return _context2.abrupt("return", res.status(500).json({
              message: "Error: ".concat(_context2.t0)
            }));

          case 20:
            _context2.next = 23;
            break;

          case 22:
            return _context2.abrupt("return", res.status(404).json({
              message: 'User not found'
            }));

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 17]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;