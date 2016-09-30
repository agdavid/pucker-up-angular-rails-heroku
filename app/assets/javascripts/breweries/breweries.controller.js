(function(){

    'use strict';

    function BreweriesController() {

        var vm = this;

        //callable methods on the vm
        vm.test = "We have the breweries!";
        
        //instantiated info
        activate();

        //defined methods on the vm
        function activate() {

        }

    };

    angular
        .module('app')
        .controller('BreweriesController', BreweriesController);

}());