import Ember from 'ember';
import mousetrap from 'ember-mousetrap/macros/mousetrap';

export default {
  name: 'register-mousetrap-macros',

  initialize: function() {
    if (Ember.EXTEND_PROTOTYPES === true || Ember.EXTEND_PROTOTYPES.Function) {
      Function.prototype.mousetrap = function(keys, action) {
        return mousetrap(keys, action, this);
      };
    }
  }
}
