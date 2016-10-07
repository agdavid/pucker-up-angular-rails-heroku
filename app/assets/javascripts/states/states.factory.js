(function(){

    'use strict';

    function StateFactory($http) {

        return {
            getStates: getStates
        }

        function getStates() {
            return $http.get('/states')
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

    StateFactory.$inject['$http'];

  angular
      .module('app')
      .factory('StateFactory', StateFactory);

}());