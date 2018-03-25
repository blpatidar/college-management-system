app.factory("AddMarksheetFactory", function ($http, $q) {

    return {
        addMarksheet: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Marksheet", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        list: function () {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Marksheet", "method": "GET" }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        getMarks: function () {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/StudentMarks", "method": "GET" }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        updateMarks: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Marksheet", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },

    }
});