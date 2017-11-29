function repoLanguagesCtrl() {
  console.log('language controller initiated');
}


module.exports = {
  template: require('./repo-languages.html'),
  controller: repoLanguagesCtrl,
  bindings: {
    languages: '<'
  }
}
