/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-mousetrap',

  included: function(app) {
    app.import(app.bowerDirectory + '/mousetrap/mousetrap.js');
  }
};
