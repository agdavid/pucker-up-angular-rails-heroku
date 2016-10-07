(function(){

    'use strict';

    function StatesController(StateFactory) {

        var vm = this;

        //callable methods on the vm
        vm.test = "We have the states!";

        //instantiate info
        activate();

        //defined methods on the vm
        function activate() {
            getStates();
        };

        function getStates() {
            return StateFactory.getStates()
                .then(setStates);
        };

        function setStates(data) {
            return vm.states = data;
        };

    };

    StatesController.$inject = ['StateFactory'];

    angular
      .module('app')
      .controller('StatesController', StatesController);

}());

