/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-mousetrap',

  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/mousetrap/mousetrap.js');
    }
  }
};
