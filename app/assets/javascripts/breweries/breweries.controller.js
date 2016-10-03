(function(){

    'use strict';

    function BreweriesController(BreweryFactory, $filter) {
        var vm = this;

        //callable methods on the vm
        vm.test = "We have the breweries!";
        vm.refilter = refilter;
        vm.createBrewery = createBrewery;

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

        // Note: function getBrewery(id) for breweries#show is in routes.js

        function setBreweries(data) {
            return vm.breweries = data;    
        };

        function setBrewery(data) {
            return vm.showBrewery = data;
        }

        function setFilteredList(data) {
            return vm.filteredList = data;    
        };

        function refilter() {
            if (vm.searchTerm && !vm.searchState) {
                return vm.filteredList = $filter('filter')(vm.breweries, vm.searchTerm);
            } else if (vm.searchState && !vm.searchTerm){
                return vm.filteredList = $filter('filter')(vm.breweries, vm.searchState);
            } else {
                vm.filteredStateList = $filter('filter')(vm.breweries, vm.searchState);
                return vm.filteredList = $filter('filter')(vm.filteredStateList, vm.searchTerm);
            }    
        };

    };

    angular
        .module('app')
        .controller('BreweriesController', BreweriesController);

}());