module.exports = {
  normalizeEntityName: function() {
    // do nothing
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('mousetrap');
  }
};
