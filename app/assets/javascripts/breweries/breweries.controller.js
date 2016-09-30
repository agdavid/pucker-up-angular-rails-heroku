(function(){

    'use strict';

    function BreweriesController(BreweryFactory) {

        var vm = this;

        //callable methods on the vm
        vm.test = "We have the breweries!";
        
        //instantiated info
        activate();

        //defined methods on the vm
        function activate() {
            getBreweries();
        };

        function getBreweries() {
            return BreweryFactory.getBreweries()
                .then(setBreweries);
        };

        function setBreweries(data) {
            return vm.breweries = data;    
        };

    };

    angular
        .module('app')
        .controller('BreweriesController', BreweriesController);

}());