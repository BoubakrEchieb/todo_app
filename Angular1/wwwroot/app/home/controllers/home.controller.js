(function () {
    'use strict';
    function homeController() {
        var vm = this;
        vm.title = 'Home';
        return vm;
    }
    angular.module('app-module')
    .controller('HomeController', homeController);
})();