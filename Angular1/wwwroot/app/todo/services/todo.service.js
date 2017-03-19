(function () {
    'use strict';
    function todoService($http) {
        var get = function () {
            return $http.get('api/Todo');
        },
        save = function (todo) {
            return $http.post('api/Todo', todo);
        },
        remove = function (id) {
            return $http.delete('api/Todo/'+ id);
        };
        return {
            Get: get,
            Save: save,
            Remove: remove
        };
    }
    angular.module('app-module')
    .factory('TodoService', ['$http', todoService]);
})();