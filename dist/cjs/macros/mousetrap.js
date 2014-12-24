"use strict";
var Ember = require("ember")["default"] || require("ember");

function mousetrap(keys, action, callback) {
  if (arguments.length === 2) {
    callback = action;
    action   = undefined;
  }

  callback.__ember_mousetrap__ = {keys: keys, action: action};

  return callback;
}

if (Ember.EXTEND_PROTOTYPES === true || Ember.EXTEND_PROTOTYPES.Function) {
  Function.prototype.mousetrap = function(keys, action) {
    return mousetrap(keys, action, this);
  };
}

exports["default"] = mousetrap;