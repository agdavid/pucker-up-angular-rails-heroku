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
          //static page
              .state('home.about', {
                  url: 'about',
                  templateUrl: 'about/about.html'
              })
          //map page
              .state('home.map', {
                  url: 'map',
                  templateUrl: 'map/map.html'
              })
          //breweries pages
              .state('home.breweries', {
                url: 'breweries',
                templateUrl: 'breweries/index.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('home.create', {
                url: 'breweries/create',
                templateUrl: 'breweries/create.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('home.edit', {
                url: 'breweries/edit/:breweryId',
                templateUrl: 'breweries/edit.html',
                controller: 'BreweriesShowController as breweriesShowCtrl'
              })
              .state('home.show', {
                url: 'breweries/show/:breweryId',
                templateUrl: 'breweries/show.html',
                controller: 'BreweriesShowController as breweriesShowCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());