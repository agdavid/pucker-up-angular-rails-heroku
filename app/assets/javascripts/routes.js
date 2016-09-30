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
              .state('faq', {
                url: '/faq',
                templateUrl: 'faq/faq.html'
              })
              .state('faq.history', {
                url:'/history',
                templateUrl: 'faq/history.html'
              })
              .state('faq.science', {
                url: '/science',
                templateUrl: 'faq/science.html'
              })
              .state('breweries', {
                url: '/breweries',
                templateUrl: 'breweries/index.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('create', {
                url: '/breweries/create',
                templateUrl: 'breweries/create.html',
                controller: 'BreweriesController as breweriesCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());