'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _user = require('../model/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    api.post('/add', function (req, res, next) {
        var user = new _user2.default();
        user.name = req.body.name;
        user.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.status(200).send({
                message: "getting first route"
            });
        });
    });

    return api;
};
//# sourceMappingURL=user.js.map