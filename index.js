/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-mousetrap',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/mousetrap/mousetrap.js');
  }
};
