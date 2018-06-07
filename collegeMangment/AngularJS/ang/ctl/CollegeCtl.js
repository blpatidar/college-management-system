app.controller('CollegeCtl', function ($scope, CollegeFactory, $timeout, $location) {
    $scope.msg = "College";
    $scope.form = { "operation": "add" };

    $scope.submit = function () {
        CollegeFactory.CollegeStaffSignUp($scope.form).then(function (res) {
            $scope.successMessage = "Form Submitted successfully";
            $scope.successMessagebool = true;
            $timeout(function () {
                $scope.successMessagebool = false;

                $location.path("CollegeStaffSignUp");
            }, 2000);
            $scope.response = res;
            $scope.form = { "operation": "add" };
        }, function (error) { });
    };

    $scope.emailcheck = function () {
        $scope.lform = { "operation": "emailAuthenticate" };
        $scope.lform.email = $scope.form.email;
        CollegeFactory.emailAuthenticate($scope.lform).then(function (res) {
            $scope.response = res;
            $scope.myForm.email.$setValidity('unique', $scope.response.success);

        }, function (error) { console.log(error) });

    };
    $scope.ClearMessage = function () {
        $scope.Message = "";
    };

    CollegeFactory.list().then(function (res) {
        $scope.dataList = res.response;
        $scope.current_grid = 1;
        $scope.data_limit = 10;
        $scope.filter_data = $scope.dataList.length;
        $scope.entire_user = $scope.dataList.length;
    }, function (error) { });
    $scope.page_position = function (page_number) {
        $scope.current_grid = page_number;
    };
    $scope.filter = function () {
        $timeout(function () {
            $scope.filter_data = $scope.searched.length;
        }, 20);
    };
    $scope.sort_with = function (base) {
        $scope.base = base;
        $scope.reverse = !$scope.reverse;
    };
});


app.filter('beginning_data', function () {
    return function (input, begin) {
        if (input) {
            begin = +begin;
            return input.slice(begin);
        }
        return [];
    }
});

