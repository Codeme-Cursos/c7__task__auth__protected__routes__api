"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = void 0;

var login = function login(req, res) {
  res.json({
    message: 'login'
  });
};

exports.login = login;

var register = function register(req, res) {
  res.json({
    message: 'register'
  });
};

exports.register = register;