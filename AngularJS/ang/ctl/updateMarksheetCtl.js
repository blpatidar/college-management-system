app.controller('UpdateMarksheetCtl', function ($scope, AddMarksheetFactory) {
    $scope.form = { "operation": "update" }
    $scope.updateMarksheet = function () {
        $scope.cancelModal();
        AddMarksheetFactory.updateMarks($scope.form).then(function (res) {
            $scope.successMessage = "Marksheet Updated successfully";
            $scope.successMessagebool = true;
            $timeout(function () {
                $scope.successMessagebool = false;

                $location.path("MarksheetList");
            }, 2000);
            $scope.response = res;
            $scope.form = { "operation": "update" };
        }, function (error) { });
    };

})