(function () {
    'use strict';
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/app/home/views/home.view.html'
        })
        .state('todo', {
            url: '/todo',
            templateUrl: '/app/todo/views/todo.view.html'
        });
        $urlRouterProvider.otherwise('/home');
    }
    angular.module('app-module')
    .config(['$stateProvider', '$urlRouterProvider', config]);
})();