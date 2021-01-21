"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var UserModel = _database.sequelize.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: _sequelize["default"].TEXT,
    allowNull: false
  },
  email: {
    type: _sequelize["default"].TEXT,
    allowNull: false,
    unique: true
  },
  password: {
    type: _sequelize["default"].TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  versionKey: false
});

var _default = UserModel;
exports["default"] = _default;