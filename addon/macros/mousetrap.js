export default function(keys, action, callback) {
  if (arguments.length === 2) {
    callback = action;
    action   = undefined;
  }

  callback.__ember_mousetrap__ = {keys: keys, action: action};

  return callback;
}
