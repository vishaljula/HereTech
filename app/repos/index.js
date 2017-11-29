import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './repos.routes.js'
import reposList from './repos-list/repos-list.component'
import repoLanguages from './repo-languages/repo-languages.component'
import ReposService from './repos.service'

export default angular.module('hereMaps.repos', [uirouter])
  .config(routes)
  .component('reposList', reposList)
  .component('repoLanguages', repoLanguages)
  .service('ReposService', ReposService)
  .name
