(function(){

    'use strict';

    function BreweriesShowController(BreweryFactory, $stateParams, $state) {
        var vm = this;

        //callable methods on the vm
        vm.getBrewery = getBrewery;
        vm.updateBrewery = updateBrewery;
        vm.destroyBrewery = destroyBrewery;

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

        function destroyBrewery(id) {
            return BreweryFactory.destroyBrewery(id)
                       .then(showBreweries);
        };

        function setBrewery(data) {
            return vm.brewery = data;
        };

        function showBrewery(data) {
            $state.go('home.breweries.show', { breweryId: data.id });
        };

        function showBreweries() {
            $state.go('home.breweries.index');
        };
    };

    angular
        .module('app')
        .controller('BreweriesShowController', BreweriesShowController);
}());