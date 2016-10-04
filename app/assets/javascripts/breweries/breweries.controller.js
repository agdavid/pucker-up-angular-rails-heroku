(function(){

    'use strict';

    function BreweriesController(BreweryFactory, $filter, $state) {
        var vm = this;

        //callable methods on the vm
        vm.test = "We have the breweries!";
        vm.getBreweries = getBreweries;
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
            return BreweryFactory.createBrewery(vm.brewery)
                       .then(showBrewery);
        };

        // Note: function getBrewery(id) for breweries.show is in breweries.show.controller.js
        // Note: function updateBrewery() is in breweries.show.controller.js

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
            } else {
                vm.filteredStateList = $filter('filter')(vm.breweries, vm.searchState);
                return vm.filteredList = $filter('filter')(vm.filteredStateList, vm.searchTerm);
            }    
        };

        function showBrewery(data) {
            $state.go('home.show', { breweryId: data.id });
        };

    };

    angular
        .module('app')
        .controller('BreweriesController', BreweriesController);

}());