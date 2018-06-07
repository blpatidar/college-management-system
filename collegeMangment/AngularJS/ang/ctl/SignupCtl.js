app.controller('SignupCtl', function ($scope, SignupFactory, $timeout, $location) {
    $scope.msg = "Student";
    $scope.form = { "operation": "add" };
    $scope.submit = function () {

        SignupFactory.signup($scope.form).then(function (res) {
            $scope.successMessage = "Form submitted successfully";
            $scope.successMessagebool = true;
            $timeout(function () {
                $scope.successMessagebool = false;

                $location.path("StudentSignUp");
            }, 2000);
            $scope.response = res;
            $scope.form = { "operation": "add" };
        }, function (error) { });
    };


    $scope.logincheck = function () {
        $scope.lform = { "operation": "userAuthenticate" };
        $scope.lform.login = $scope.form.login;
        SignupFactory.userAuthenticate($scope.lform).then(function (res) {
            $scope.response = res;
            $scope.myForm.login.$setValidity('unique', $scope.response.success);

        }, function (error) { console.log(error) });

    };
    $scope.ClearMessage = function () {
        $scope.Message = "";
    };

    SignupFactory.list().then(function (res) {
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
