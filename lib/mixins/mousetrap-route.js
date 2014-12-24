import Ember from 'ember';

export default Ember.Mixin.create({
  mergedProperties: ['shortcuts'],

  init: function() {
    this._super.apply(this, arguments);

    this.on('activate', this, function() {
      if (!this.shortcuts) return;

      Ember.keys(this.shortcuts).forEach(function(key) {
        var callback = this.shortcuts[key];

        if (!callback.__ember_mousetrap__) return;

        var {keys, action} = callback.__ember_mousetrap__;

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
