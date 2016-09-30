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
              .state('breweries', {
                url: '/breweries',
                templateUrl: 'breweries/breweries.html',
                controller: 'BreweriesController as breweriesCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());