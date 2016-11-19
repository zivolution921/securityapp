angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

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
          url: '/watch-list',
          templateUrl: 'watchlist.html',
          controller: 'WatchListController'
        })
        .state('newproperty', {
          url: '/new-property',
          templateUrl: 'newproperty.html',
          controller: 'NewPropertyController'
        })
        ;

    // default fall back route
    $urlRouterProvider.otherwise('/');

   
});