  function BreweryFactory($http) {
      
      return {
          getBreweries: getBreweries,
          getBrewery: getBrewery,
          createBrewery: createBrewery,
          updateBrewery: updateBrewery,
          destroyBrewery: destroyBrewery
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

      function destroyBrewery(id) {
          return $http.delete('/breweries/' + id)
              .then(handleSuccess)
              .catch(handleError)
      };

      function handleSuccess(response) {
          console.log(response);
          return response.data;  
      };

      function handleError(error) {
          console.log(error);
      };

  };

  BreweryFactory.$inject = ['$http'];

  angular
      .module('app')
      .factory('BreweryFactory', BreweryFactory);