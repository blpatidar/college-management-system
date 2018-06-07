app.factory("AddCollegeFactory", function ($http, $q) {

    return {
        addCollege: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/College", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        list: function () {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/College", "method": "GET" }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
    }
});