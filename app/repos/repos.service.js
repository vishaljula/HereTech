export default class ReposService {
  constructor($http) {
    this.$http = $http
  }

  getRepos() {
    return this.$http.get('https://api.github.com/users/heremaps/repos');
  }

  getLanguages(name) {
    return this.$http.get('https://api.github.com/repos/heremaps/'+name+'/languages');
  }

}
