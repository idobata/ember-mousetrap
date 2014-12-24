define(
  ["ember","./macros/mousetrap","./mixins/mousetrap-route","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var mousetrap = __dependency2__["default"] || __dependency2__;
    var RouteMixin = __dependency3__["default"] || __dependency3__;

    __exports__.mousetrap = mousetrap;
    __exports__.RouteMixin = RouteMixin;
  });