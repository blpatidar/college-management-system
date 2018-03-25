app.controller('RoleCtl', function ($scope, RoleFactory,$timeout,$location) {
    $scope.msg = "Role";
    $scope.form = { "operation": "add" };

    $scope.submit = function () {
        RoleFactory.addRole($scope.form).then(function (res) {
            $scope.successMessage = "Role Added successfully";
            $scope.successMessagebool = true;
            $timeout(function () {
                $scope.successMessagebool = false;

                $location.path("Role");
            }, 2000);
            $scope.response = res;
            $scope.form = { "operation": "add" };
        }, function (error) { });
    };

    RoleFactory.list().then(function (res) {
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