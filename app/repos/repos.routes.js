routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('repos', {
    url: '/',
    template: require('./repos.html'),
    resolve: {
      repos: ['ReposService', (ReposService) => {
        return ReposService.getRepos()
      }]
    }
  })
  .state('repoLanguages', {
    url: '/:name/languages',
    template: require('./languages.html'),
    resolve: {
      languages: ['ReposService', '$stateParams', (ReposService, $stateParams) => {
        return ReposService.getLanguages($stateParams.name).then(function(response) {
          return Object.keys(response.data);
        })
      }],
      repoName: ['$stateParams', ($stateParams) => {
        return $stateParams.name;
      }]
    }
  });
}
