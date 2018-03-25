app.controller('AddMarksheetCtl', function ($scope, AddMarksheetFactory, $timeout, $location) {
    $scope.form = { "operation": "add" };
    $scope.submit = function () {
        AddMarksheetFactory.addMarksheet($scope.form).then(function (res) {
            $scope.successMessage = "Marksheet Added successfully";
            $scope.successMessagebool = true;
            $timeout(function () {
                $scope.successMessagebool = false;

                $location.path("AddMarksheet");
            }, 2000);
            $scope.response = res;
            $scope.form = { "operation": "add" };
        }, function (error) { });
    };

    AddMarksheetFactory.list().then(function (res) {
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
