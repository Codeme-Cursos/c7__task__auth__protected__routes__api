"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var TaskModel = _database.sequelize.define('tasks', {
  id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    primaryKey: true
  },
  responsable: {
    type: _sequelize["default"].TEXT,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT,
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = TaskModel;
exports["default"] = _default;