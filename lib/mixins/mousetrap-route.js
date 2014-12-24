import Ember from 'ember';

export default Ember.Mixin.create({
  mergedProperties: ['shortcuts'],

  mousetrapBindKeys: Ember.on('activate', function() {
    if (!this.shortcuts) return;

    Ember.keys(this.shortcuts).forEach(function(key) {
      var callback = this.shortcuts[key];

      if (!callback.__ember_mousetrap__) return;

      var {keys, action} = callback.__ember_mousetrap__;

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
