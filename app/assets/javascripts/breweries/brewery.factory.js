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

      function handleSuccess(response) {
          //$http requests return a promise which needs to be parsed for its .data attribute
          //print to console to confirm visually
          console.log(response);
          //return to controller
          return response.data;  
      };

      function handleError(error) {
          //print to console to confirm visually
          console.log(error);
      };

  };

  angular
      .module('app')
      .factory('BreweryFactory', BreweryFactory);

}());