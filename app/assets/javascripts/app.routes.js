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
          //auth pages
              .state('home.login', {
                  url:'login',
                  templateUrl: 'auth/login.html',
                  controller: 'AuthController as authCtrl',
                  onEnter: function($state, Auth) {
                      Auth.currentUser().then(function(){
                          $state.go('home.breweries');
                      });
                  }
              })
              .state('home.register', {
                  url:'register',
                  templateUrl: 'auth/register.html',
                  controller: 'AuthController as authCtrl',
                  onEnter: function($state, Auth) {
                      Auth.currentUser().then(function(){
                          $state.go('home.breweries');
                      });
                  }    
              })
          //static pages
              .state('home.faq', {
                  url: 'faq',
                  templateUrl: 'faq/home.html'
              })
              .state('home.faq.history', {
                  url:'/history',
                  templateUrl: 'faq/history.html'
              })
              .state('home.faq.science', {
                  url: '/science',
                  templateUrl: 'faq/science.html'
              })
          //breweries pages
              .state('home.breweries', {
                url: 'breweries',
                templateUrl: 'breweries/home.html'
              })
              .state('home.breweries.index', {
                url: '/index',
                templateUrl: 'breweries/index.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('home.breweries.create', {
                url: '/create',
                templateUrl: 'breweries/create.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('home.breweries.edit', {
                url: '/edit/:breweryId',
                templateUrl: 'breweries/edit.html',
                controller: 'BreweriesShowController as breweriesShowCtrl'
              })
              .state('home.breweries.show', {
                url: '/show/:breweryId',
                templateUrl: 'breweries/show.html',
                controller: 'BreweriesShowController as breweriesShowCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());