app.controller('BaseCtl', function ($scope, $location, $cookieStore, SignupFactory) {
    $scope.success = $cookieStore.get("user");
    $scope.logout = function () {
        $cookieStore.remove("user");
        $location.path("/");
        window.location.reload(1);
    }
    $scope.cancel = function () {
        $cookieStore.remove("user");
        $location.path("/");
        window.location.reload(1);
    }

});