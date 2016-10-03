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

      function getBrewery(id) {
          return $http.get('/breweries/' + id)
              .then(handleSuccess)
              .catch(handleError)
      };

      function createBrewery(brewery) {
          var req = {
              method: 'POST',
              url: '/breweries',
              headers: {
                  'Content-Type': 'application/json'
              },
              data: {
                  brewery: brewery
                  // the 'brewery' data object {
                  //    name: 'Evolution Craft Brewing',
                  //    state_id: 20  
                  //}
              }
          };

          return $http(req)
                     .then(handleSuccess)
                     .catch(handleError)

      };

      function updateBrewery(brewery) {
          var req = {
              method: 'PATCH',
              url: '/breweries/' + brewery.id,
              headers: {
                  'Content-Type': 'application/json'
              },
              data: {
                brewery: brewery
              }
          };

          return $http(req)
                     .then(handleSuccess)
                     .catch(handleError)
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