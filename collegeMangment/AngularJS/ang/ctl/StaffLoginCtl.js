app.controller('StaffLoginCtl', function ($scope, $location, $cookieStore, CollegeFactory) {
    $scope.form = { "operation": "loginAuthenticate" };
    $scope.submit = function () {
        CollegeFactory.staffLogin($scope.form).then(function (res) {
            $scope.response = res;
            $cookieStore.put("user", { "success": "!staff", "name": $scope.form.email });
            if ($scope.response.success) {
                $cookieStore.put("user", { "success": "staff", "name": $scope.form.email });
                $location.path("StudentDashboard");
                window.location.reload(1);
            }
        }, function (error) { console.log(error) });
    };
})