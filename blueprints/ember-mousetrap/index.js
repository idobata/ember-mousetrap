module.exports = {
  name: 'ember-mousetrap',

  afterInstall: function() {
    return this.addBowerPackageToProject({
      name:    'mousetrap',
      version: '^1.4.6'
    });
  }
};
