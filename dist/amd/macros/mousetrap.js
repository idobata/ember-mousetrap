define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

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

    __exports__["default"] = mousetrap;
  });