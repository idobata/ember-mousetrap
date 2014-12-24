import Ember from 'ember';

function mousetrap(keys, action, callback) {
  if (arguments.length === 2) {
    callback = action;
    action   = undefined;
  }

  callback.__ember_mousetrap__ = {keys, action};

  return callback;
}

if (Ember.EXTEND_PROTOTYPES === true || Ember.EXTEND_PROTOTYPES.Function) {
  Function.prototype.mousetrap = function(keys, action) {
    return mousetrap(keys, action, this);
  };
}

export default mousetrap;
