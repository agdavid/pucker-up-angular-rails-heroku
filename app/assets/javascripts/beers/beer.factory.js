(function(){

  'use strict';

  function BeerFactory($http) {
      return {
          getBeers: getBeers,
          getBeer: getBeer,
          createBeer: createBeer,
          updateBeer: updateBeer,
          deleteBeer: deleteBeer
      }  
  
      function getBeers() {

      };

      function getBeer() {

      };

      function createBeer() {

      };

      function updateBeer() {

      };

      function deleteBeer() {

      };

  };

  angular
      .module('app')
      .factory('BeerFactory', BeerFactory);

}());