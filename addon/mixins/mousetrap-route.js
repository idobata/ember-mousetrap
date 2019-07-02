import Mixin from '@ember/object/mixin';
import Mousetrap from 'mousetrap';
import { on } from '@ember/object/evented';

export default Mixin.create({
  mergedProperties: ['shortcuts'],

  mousetrapBindKeys: on('activate', function() {
    if (typeof FastBoot !== 'undefined' || !this.shortcuts) { return; }

    Object.keys(this.shortcuts).forEach(function(key) {
      var callback = this.shortcuts[key];

      if (!callback.__ember_mousetrap__) { return; }

      var keys   = callback.__ember_mousetrap__.keys;
      var action = callback.__ember_mousetrap__.action;

      Mousetrap.bind(keys, callback.bind(this), action);
    }, this);
  }),

  mousetrapUnbindKeys: on('deactivate', function() {
    if (typeof FastBoot !== 'undefined' || !this.shortcuts) { return; }

    Object.keys(this.shortcuts).forEach(function(key) {
      var callback = this.shortcuts[key];

      if (!callback.__ember_mousetrap__) { return; }

      var keys = callback.__ember_mousetrap__.keys;

      Mousetrap.unbind(keys);
    }, this);
  })
});
