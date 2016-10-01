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
                templateUrl: 'breweries/home.html'
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
              .state('breweries.show', {
                url: '/:breweryId',
                templateUrl: 'breweries/show.html',
                controller: function(BreweryFactory, $stateParams) {
                                var vm = this;
                                activate();
                                function activate() {
                                    getBrewery($stateParams.breweryId);
                                };
                                function getBrewery(id) {
                                    return BreweryFactory.getBrewery(id)
                                               .then(setBrewery);
                                };
                                function setBrewery(data) {
                                    return vm.brewery = data;
                                };
                            },
                controllerAs: 'breweryShowCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());