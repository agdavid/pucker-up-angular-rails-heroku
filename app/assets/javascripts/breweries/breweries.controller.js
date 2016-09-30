(function(){

    'use strict';

    function BreweriesController(BreweryFactory, $filter) {

        var vm = this;

        //callable methods on the vm
        vm.test = "We have the breweries!";
        vm.createBrewery = createBrewery;
        vm.refilter = refilter;

        //instantiated info
        activate();

        //defined methods on the vm
        function activate() {
            getBreweries();
        };

        function getBreweries() {
            return BreweryFactory.getBreweries()
                       .then(setBreweries)
                       .then(setFilteredList)
        };

        function createBrewery() {
            return BreweryFactory.createBrewery(vm.newBrewery)
                       .then(getBreweries)
        };

        function setBreweries(data) {
            return vm.breweries = data;    
        };

        function setFilteredList(data) {
            return vm.filteredList = data;    
        };

        function refilter() {
            if (vm.searchTerm && !vm.searchState) {
                return vm.filteredList = $filter('filter')(vm.breweries, vm.searchTerm);
            } else if (vm.searchState && !vm.searchTerm){
                return vm.filteredList = $filter('filter')(vm.breweries, vm.searchState);
            }    
        };

    };

    angular
        .module('app')
        .controller('BreweriesController', BreweriesController);

}());