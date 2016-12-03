angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html',
          controller: 'AboutController'
        })
        .state('watchlist', {
          url: '/watchlist',
          templateUrl: 'watchlist.html',
          controller: 'WatchListController'
        })
        .state('newproperty', {
          url: '/new-property',
          templateUrl: 'newproperty.html',
          controller: 'NewPropertyController'
        })
        .state('user-property', {
          url: '/watchlist/:property_id', 
          templateUrl: 'userproperty.html',
          controller: 'UserPropertyController'
        })
        .state('installation', {
          url: '/installation', 
          templateUrl: 'installation.html',
          controller: 'InstallationController'
        })
        ;

    // default fall back route
    $urlRouterProvider.otherwise('/');

   
}]);