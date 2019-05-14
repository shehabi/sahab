angular.module('resturant', ['ionic', 'resturant.controllers', 'resturant.services'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('search', {
                url: '/search',
                templateUrl: 'templates/menu.html',
                controller: 'resturantListCtrl'
            })

            .state('resturant', {
                url: '/resturants/:resturantId',
                templateUrl: 'templates/details.html',
                controller: 'resturantDetailCtrl'
            })

            .state('resturantsbhs', {
                url: '/resturants/:resturantId/resturantsbhs',
                templateUrl: 'templates/data.html',
                controller: 'resturantresturantsbhsCtrl'
            });
        $urlRouterProvider.otherwise('/search');
    });