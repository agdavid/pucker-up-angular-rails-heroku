(function(){

    'use strict';

    function BeersController() {

        var vm = this;

        //callable methods on the vm
        vm.test = "We have the beers!";
        
        //instantiated info
        activate();

        //defined methods on the vm
        function activate() {

        }

    };

    angular
        .module('app')
        .controller('BeersController', BeersController);

}());