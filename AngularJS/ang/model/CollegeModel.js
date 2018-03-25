app.factory("CollegeFactory", function ($http, $q) {

    return {
        CollegeStaffSignUp: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Student", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        staffLogin: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/StaffLogin", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        list: function () {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Student", "method": "GET" }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
        emailAuthenticate: function (form) {
            var def = $q.defer();
            $http({ "url": "http://127.0.0.1:3000/Emailauth", "method": "POST", "data": form }).then(function (res) {
                def.resolve(res.data);
            }, function (error) {
                console.log(error);
                def.reject(error.data);
            });
            return def.promise;
        },
    }
});