function reposListCtrl() {
  console.log('repo list controller initiated');
}

module.exports = {
  template: require('./repos-list.html'),
  controller: reposListCtrl,
  bindings: {
    repos: '<'
  }
}
