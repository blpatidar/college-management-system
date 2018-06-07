app.factory("RoleFactory", function ($http, $q) {

    return {
        addRole: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Role", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },

        list: function () {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Role", "method": "GET" }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
    }
});