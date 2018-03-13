app.controller('LoginCtl', function ($scope, $location, $cookieStore, SignupFactory) {
    $scope.form = { "operation": "authenticate" };
    $scope.submit = function () {
        console.log($scope.form.login);
        SignupFactory.authenticate($scope.form).then(function (res) {
            $scope.response = res;
            console.log($scope.response);
            $cookieStore.put("user",{"success":"!student","name":$scope.form.login});
            if ($scope.response.success) {
                $cookieStore.put("user",{"success":"student","name":$scope.form.login});
                $location.path("StudentDashboard");
                window.location.reload(1);
            }
        }, function (error) {console.log(error) });
    };


})