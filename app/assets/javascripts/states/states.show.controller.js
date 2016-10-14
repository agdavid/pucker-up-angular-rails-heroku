(function() {

    'use strict';

    function StatesShowController($stateParams, BreweryFactory, $filter) {
        var vm = this;

        //instantiated info
        activate();

        //defined methods on the vm
        function activate() {
            stateName($stateParams);
            getBreweries();
            
        };

        function stateName($stateParams) {
            //this function covers the case of a user directly typing '/states/colorado' rather than '/states/Colorado'
            var stateLettersArray = $stateParams.stateName.split('');
            var upperCaseLetter = stateLettersArray[0].toUpperCase();
            stateLettersArray[0] = upperCaseLetter;
            return vm.stateName = stateLettersArray.join('');
        };

        function getBreweries() {
            return BreweryFactory.getBreweries()
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