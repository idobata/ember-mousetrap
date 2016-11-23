import Ember from 'ember';

export default Ember.Mixin.create({
  mergedProperties: ['shortcuts'],

  didInsertElement: function() {
		this._super.apply(this, arguments);
	    if (!this.shortcuts) return;

	    Ember.keys(this.shortcuts).forEach(function(key) {
	      var callback = this.shortcuts[key];

	      if (!callback.__ember_mousetrap__) return;

	      var keys   = callback.__ember_mousetrap__.keys;
	      var action = callback.__ember_mousetrap__.action;

	      Mousetrap.bind(keys, callback.bind(this), action);
	    }, this);
	},

    willDestroyElement: function() {
		this._super();
	    if (!this.shortcuts) return;

	    Ember.keys(this.shortcuts).forEach(function(key) {
	      var callback = this.shortcuts[key];

	      if (!callback.__ember_mousetrap__) return;

	      var keys = callback.__ember_mousetrap__.keys;

	      Mousetrap.unbind(keys);
	    }, this);
	}
});
