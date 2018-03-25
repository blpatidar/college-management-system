app.factory("SignupFactory", function ($http, $q) {

    return {
        signup: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/User", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        list: function () {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/User", "method": "GET" }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        authenticate: function (form) {
            var def = $q.defer();

            $http({ "url": "http://127.0.0.1:3000/Login", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                def.reject(error.data);

            });
            return def.promise;
        },
        userAuthenticate: function (form) {
            var def = $q.defer();

            $http({ "url": "http://127.0.0.1:3000/Userauth", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                def.reject(error.data);

            });
            return def.promise;
        }
    }
});