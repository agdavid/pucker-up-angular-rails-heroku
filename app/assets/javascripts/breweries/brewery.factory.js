(function(){

  'use strict';

  function BreweryFactory($http) {
      return {
          getBreweries: getBreweries,
          getBrewery: getBrewery,
          createBrewery: createBrewery,
          updateBrewery: updateBrewery,
          deleteBrewery: deleteBrewery
      }  
  
      function getBreweries() {
          return $http.get('/breweries')
              .then(handleSuccess)
              .catch(handleError);  
      };

      function getBrewery() {

      };

      function createBrewery() {

      };

      function updateBrewery() {

      };

      function deleteBrewery() {

      };

  };

  angular
      .module('app')
      .factory('BreweryFactory', BreweryFactory);

}());