(function () {
    'use strict';
    function todoController(TodoService) {
        //body of the controller
        var vm = this;
        vm.title = 'Todo';
        vm.loadTodos = function () {
            TodoService.Get().then(function (results) {
                vm.todos = results.data;
            }, errorHandler);
        };
        vm.addTodo = function () {
            if (vm.newTodo.description) {
                TodoService.Save(vm.newTodo).then(function (result) {
                    vm.todos.push(result.data);
                    vm.newTodo = {};
                });
            }
        };
        vm.delete = function (todo) {
            if (todo) {
                TodoService.Remove(todo.id).then(function () {
                    vm.todos.splice(vm.todos.indexOf(todo), 1);
                }, errorHandler);
            }
        };
        function errorHandler(error) {
            console.error(error);
            alert(error.reason);
        }
    }

    

    angular.module('app-module')
    .controller('TodoController', ['TodoService', todoController]);
})();