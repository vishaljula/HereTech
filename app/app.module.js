import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './app.routes'
import repos from './repos'

angular.module('hereMaps', [uirouter, repos])
  .config(routes)
