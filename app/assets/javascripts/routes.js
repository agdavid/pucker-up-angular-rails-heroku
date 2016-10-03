(function(){

  'use strict';

  angular
      .module('app')
      .config(function($stateProvider, $urlRouterProvider){
          $stateProvider
          //landing page
              .state('home', {
                  url: '/',
                  templateUrl: 'home/home.html',
                  controller: 'HomeController as homeCtrl'
              })
          //static pages
              .state('faq', {
                  url: '/faq',
                  templateUrl: 'faq/home.html'
              })
              .state('faq.history', {
                  url:'/history',
                  templateUrl: 'faq/history.html'
              })
              .state('faq.science', {
                  url: '/science',
                  templateUrl: 'faq/science.html'
              })
          //breweries pages
              .state('breweries', {
                url: '/breweries',
                templateUrl: 'breweries/home.html',
                controller: function($state) {
                    $state.go('breweries.index');    
                }
              })
              .state('breweries.index', {
                url: '/index',
                templateUrl: 'breweries/index.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('breweries.create', {
                url: '/create',
                templateUrl: 'breweries/create.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('breweries.edit', {
                url: '/edit/:breweryId',
                templateUrl: 'breweries/edit.html',
                controller: 'BreweriesShowController as breweriesShowCtrl'
              })
              .state('breweries.show', {
                url: '/show/:breweryId',
                templateUrl: 'breweries/show.html',
                controller: 'BreweriesShowController as breweriesShowCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());