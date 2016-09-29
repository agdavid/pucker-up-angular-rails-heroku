(function(){

  'use strict';

  angular
      .module('app')
      .config(function($stateProvider, $urlRouterProvider){
          $stateProvider
              .state('home', {
                  url: '/',
                  templateUrl: 'home/home.html',
                  controller: 'HomeController as homeCtrl'
              })
              .state('beers', {
                url: '/beers',
                templateUrl: 'beers/beers.html',
                controller: 'BeersController as beersCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());