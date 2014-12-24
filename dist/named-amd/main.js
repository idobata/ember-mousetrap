define("ember-mousetrap",
  ["ember","./macros/mousetrap","./mixins/mousetrap-route","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var mousetrap = __dependency2__["default"] || __dependency2__;
    var RouteMixin = __dependency3__["default"] || __dependency3__;

    __exports__.mousetrap = mousetrap;
    __exports__.RouteMixin = RouteMixin;
  });
define("ember-mousetrap/macros/mousetrap",
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
define("ember-mousetrap/mixins/mousetrap-route",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    __exports__["default"] = Ember.Mixin.create({
      mergedProperties: ['shortcuts'],

      mousetrapBindKeys: Ember.on('activate', function() {
        if (!this.shortcuts) return;

        Ember.keys(this.shortcuts).forEach(function(key) {
          var callback = this.shortcuts[key];

          if (!callback.__ember_mousetrap__) return;

          var var$0 = callback.__ember_mousetrap__, keys = var$0.keys, action = var$0.action;

          Mousetrap.bind(keys, callback.bind(this), action);
        }, this);
      }),

      mousetrapUnbindKeys: Ember.on('deactivate', function() {
        if (!this.shortcuts) return;

        Ember.keys(this.shortcuts).forEach(function(key) {
          var callback = this.shortcuts[key];

          if (!callback.__ember_mousetrap__) return;

          var keys = callback.__ember_mousetrap__.keys;

          Mousetrap.unbind(keys);
        }, this);
      })
    });
  });