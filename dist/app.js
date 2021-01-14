"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _express = _interopRequireWildcard(require("express"));

var _path = _interopRequireDefault(require("path"));

var _http = _interopRequireDefault(require("http"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

require("@babel/polyfill");

var _auth = _interopRequireDefault(require("./routes/auth.route"));

var _task = _interopRequireDefault(require("./routes/task.route"));

//Routes imports
var app = (0, _express["default"])();
var PORT = process.env.PORT; //configurations for render templates

/* app.set('views', path.join(__dirname, 'views')); */

app.set('view engine', 'ejs'); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());
app.use((0, _helmet["default"])());
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
var prefix = '/api';
app.get('/', function (req, res) {
  return res.render('index', {
    author: 'Codeme'
  });
});
app.use(prefix, _auth["default"]);
app.use(prefix, _task["default"]);

var server = _http["default"].createServer(app);

server.listen(PORT, function () {
  console.log("Server on port ".concat(PORT));
});