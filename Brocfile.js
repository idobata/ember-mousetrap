var esnext = require('broccoli-esnext');
var dist   = require('broccoli-dist-es6-module');

var lib = esnext('lib');

lib = dist(lib, {
  main:        'index',
  global:      'EmberMousetrap',
  packageName: 'ember-mousetrap',
  shim: {
    ember: 'Ember'
  }
});

module.exports = lib;
