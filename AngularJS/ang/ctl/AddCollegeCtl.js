app.controller('AddCollegeCtl', function ($scope, AddCollegeFactory, $timeout, $location) {
    $scope.msg = "AddCollege";
    $scope.form = { "operation": "add" };

    $scope.submit = function () {
        AddCollegeFactory.addCollege($scope.form).then(function (res) {
            $scope.successMessage = "College Added successfully";
            $scope.successMessagebool = true;
            $timeout(function () {
                $scope.successMessagebool = false;

                $location.path("AddCollege");
            }, 2000);
            $scope.response = res;
        }, function (error) { });
    };

    AddCollegeFactory.list().then(function (res) {
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
