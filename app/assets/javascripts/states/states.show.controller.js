(function() {

    'use strict';

    function StatesShowController($stateParams, BreweryFactory, $filter) {

        var vm = this;

        activate();

        function activate() {
            setStateName($stateParams);
            getBreweries();
            
        };

        function setStateName($stateParams) {
            var stateLettersArray = $stateParams.stateName.split('');
            var upperCaseLetter = stateLettersArray[0].toUpperCase();
            stateLettersArray[0] = upperCaseLetter;
            return vm.stateName = stateLettersArray.join('');
        };

        function getBreweries() {
            BreweryFactory.getBreweries()
                          .then(setBreweries);
        };

        function setBreweries(data) {
            vm.breweries = data;
            return vm.filteredList = $filter('filter')(vm.breweries, vm.stateName)
        };

    };

    angular
        .module('app')
        .controller('StatesShowController', StatesShowController);


}());