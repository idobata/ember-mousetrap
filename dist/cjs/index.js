"use strict";
var Ember = require("ember")["default"] || require("ember");

var mousetrap = require("./macros/mousetrap")["default"] || require("./macros/mousetrap");
var RouteMixin = require("./mixins/mousetrap-route")["default"] || require("./mixins/mousetrap-route");

exports.mousetrap = mousetrap;
exports.RouteMixin = RouteMixin;