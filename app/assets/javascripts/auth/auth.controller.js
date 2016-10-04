(function(){

    'use strict';

    function AuthController($scope, $state, Auth) {

        //callable methods on the vm
        vm.login = login;
        vm.register = register;

        //defined methods on the vm
        function login() {
            Auth.login($scope.user)
                .then(goToBreweries);
        };

        function register() {
            Auth.register($scope.user)
                .then(goToBreweries);
        };

        function goToBreweries() {
            $state.go('home.breweries');
        };

    };

    angular
        .module('app')
        .controller('authController', AuthController);
}());