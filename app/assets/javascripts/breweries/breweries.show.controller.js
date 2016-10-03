(function(){

    'use strict';

    function BreweriesShowController(BreweryFactory, $stateParams, $state) {
        var vm = this;

        //callable methods on the vm
        vm.getBrewery = getBrewery;
        vm.updateBrewery = updateBrewery;

        //instantiated info
        activate();

        //defined methods on the vm        
        function activate() {
          getBrewery($stateParams.breweryId);
        };

        function getBrewery(id) {
            return BreweryFactory.getBrewery(id)
                       .then(setBrewery);
        };

        function updateBrewery() {
            return BreweryFactory.updateBrewery(vm.brewery)
                       .then(showBrewery);
        };

        function setBrewery(data) {
            return vm.brewery = data;
        };

        function showBrewery(data) {
            $state.go('breweries.show', { breweryId: data.id });
        };
    };

    angular
        .module('app')
        .controller('BreweriesShowController', BreweriesShowController);
}());