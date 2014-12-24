!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.EmberMousetrap=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;

var mousetrap = _dereq_("./macros/mousetrap")["default"] || _dereq_("./macros/mousetrap");
var RouteMixin = _dereq_("./mixins/mousetrap-route")["default"] || _dereq_("./mixins/mousetrap-route");

exports.mousetrap = mousetrap;
exports.RouteMixin = RouteMixin;
},{"./macros/mousetrap":2,"./mixins/mousetrap-route":3}],2:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;

function mousetrap(keys, action, callback) {
  if (arguments.length === 2) {
    callback = action;
    action   = undefined;
  }

  callback.__ember_mousetrap__ = {keys: keys, action: action};

  return callback;
}

if (Ember.EXTEND_PROTOTYPES) {
  Function.prototype.mousetrap = function(keys, action) {
    return mousetrap(keys, action, this);
  };
}

exports["default"] = mousetrap;
},{}],3:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;

exports["default"] = Ember.Mixin.create({
  mergedProperties: ['shortcuts'],

  init: function() {
    this._super.apply(this, arguments);

    this.on('activate', this, function() {
      if (!this.shortcuts) return;

      Ember.keys(this.shortcuts).forEach(function(key) {
        var callback = this.shortcuts[key];

        if (!callback.__ember_mousetrap__) return;

        var var$0 = callback.__ember_mousetrap__, keys = var$0.keys, action = var$0.action;

        Mousetrap.bind(keys, callback.bind(this), action);
      }, this);
    });

    this.on('deactivate', this, function() {
      if (!this.shortcuts) return;

      Ember.keys(this.shortcuts).forEach(function(key) {
        var callback = this.shortcuts[key];

        if (!callback.__ember_mousetrap__) return;

        var keys = callback.__ember_mousetrap__.keys;

        Mousetrap.unbind(keys);
      }, this);
    });
  }
});
},{}]},{},[1])
(1)
});