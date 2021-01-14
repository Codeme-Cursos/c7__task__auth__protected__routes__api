"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _task = _interopRequireDefault(require("./task.model"));

var UserModel = _database.sequelize.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  username: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  password: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

UserModel.hasMany(_task["default"], {
  foreignKey: 'userid',
  sourceKey: 'id'
});

_task["default"].belongsTo(UserModel, {
  foreignKey: 'userid',
  sourceKey: 'id'
});

var _default = UserModel;
exports["default"] = _default;