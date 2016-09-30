(function(){

    'use strict';

    function StatesController() {

        var vm = this;

        //callable methods on the vm
        vm.test = "We have the states!";

        //instantiate info
        activate();

        function activate() {
            getStates();
        };

        function getStates() {

        };

    };

    angular
      .module('app')
      .controller('StatesController', StatesController);

}());

