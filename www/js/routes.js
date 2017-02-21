angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  

 

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('registro', {
    url: '/registro', 
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

  .state('menu.batalla', {
    url: '/page5',
      views: {
      'side-menu21': {
          templateUrl: 'templates/batalla.html',
          controller: 'batallaCtrl'
        }
      }
  })

  .state('menu.creditos', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/creditos.html',
        controller: 'creditoCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});