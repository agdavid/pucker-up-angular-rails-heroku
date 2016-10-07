    function BreweriesShowController(BreweryFactory, $stateParams, $state, Auth) {
        var vm = this;

        //callable methods on the vm
        vm.getBrewery = getBrewery;
        vm.updateBrewery = updateBrewery;
        vm.destroyBrewery = destroyBrewery;
        vm.signedIn = Auth.isAuthenticated();
        vm.getCurrentUser = getCurrentUser;

        //instantiated info
        activate();

        //defined methods on the vm        
        function activate() {
          getBrewery($stateParams.breweryId);
          getCurrentUser();
        };

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser);
        }

        function setCurrentUser(user) {
            console.log(user);
            return vm.user = user;
        }

        function getBrewery(id) {
            return BreweryFactory.getBrewery(id)
                       .then(setBrewery);
        };

        function updateBrewery() {
            if (vm.signedIn && vm.user.admin) {
                return BreweryFactory.updateBrewery(vm.brewery)
                       .then(showBrewery);
            } else {
                alert("Whoops. You need to sign in and be an admin to edit a Brewery.");
                $state.go('home.login')
            }
        };

        function destroyBrewery(id) {
            return BreweryFactory.destroyBrewery(id)
                       .then(showBreweries);
        };

        function setBrewery(data) {
            return vm.brewery = data;
        };

        function showBrewery(data) {
            $state.go('home.show', { breweryId: data.id });
        };

        function showBreweries() {
            $state.go('home.breweries');
        };
    };

    BreweriesShowController.$inject = ['BreweryFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('app')
        .controller('BreweriesShowController', BreweriesShowController);