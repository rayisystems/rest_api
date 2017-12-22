'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStrategy = require('passport-local').Strategy;

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// Middleware
app.use(_bodyParser2.default.json({
    limit: _config2.default.bodyLimit
}));

// Passport Config
app.use(_passport2.default.initialize());
var Account = require('./model/account');
_passport2.default.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, Account.authenticate()));

_passport2.default.serializeUser(Account.serializeUser());
_passport2.default.deserializeUser(Account.deserializeUser());

// CORS
app.use((0, _cors2.default)());

// API routes
app.use('/', _routes2.default);

app.server.listen(_config2.default.port);
console.log('server started on ' + app.server.address().port);

exports.default = app;
//# sourceMappingURL=index.js.map