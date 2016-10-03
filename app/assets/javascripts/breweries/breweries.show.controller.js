(function(){

    'use strict';

    function BreweriesShowController(BreweryFactory, $stateParams) {


        var vm = this;

        //callable methods on the vm
        vm.getBrewery = getBrewery;

        activate();

        function activate() {
          getBrewery($stateParams.breweryId);
        };

        //defined methods on the vm
        function getBrewery(id) {
            return BreweryFactory.getBrewery(id)
                       .then(setBrewery);
        };

        function setBrewery(data) {
            return vm.brewery = data;
        };
    };

    angular
        .module('app')
        .controller('BreweriesShowController', BreweriesShowController);
}());