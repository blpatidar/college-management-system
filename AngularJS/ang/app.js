var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngCookies']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
        })
        .when("/Role", {
            templateUrl: "pages/role.html",
            controller: "RoleCtl"
        })
        .when("/StudentLogin", {
            templateUrl: "pages/studentLogin.html",
            controller: "LoginCtl"
        })
        .when("/StaffLogin", {
            templateUrl: "pages/staffLogin.html",
            controller: "StaffLoginCtl"
        })
        .when("/Signup", {
            templateUrl: "pages/signup.html",
            controller: "SignupCtl"
        })
        .when("/StaffSignUp", {
            templateUrl: "pages/college.html",
            controller: "CollegeCtl"
        })
        .when("/AddCollege", {
            templateUrl: "pages/addCollege.html",
            controller: "AddCollegeCtl"
        })
        .when("/CollegeList", {
            templateUrl: "pages/CollegeList.html",
            controller: "AddCollegeCtl"
        })
        .when("/AddMarksheet", {
            templateUrl: "pages/marksheet.html",
            controller: "AddMarksheetCtl"
        })
        .when("/MarksheetList", {
            templateUrl: "pages/MarksheetList.html",
            controller: "AddMarksheetCtl"
        })
        .when("/RoleList", {
            templateUrl: "pages/roleList.html",
            controller: "RoleCtl"
        })
        .when("/UserList", {
            templateUrl: "pages/studentList.html",
            controller: "SignupCtl"
        })
        .when("/StaffList", {
            templateUrl: "pages/staffList.html",
            controller: "CollegeCtl"
        })
        .when("/StudentDashboard", {
            templateUrl: "pages/studentDashboard.html"
        })
        .when("/StudentMarks", {
            templateUrl: "pages/studentMarks.html",
            controller: "ShowMarksheetCtl"
        })
        .when("/About", {
            templateUrl: "pages/about.html"
           
        })
        .when("/Contact", {
            templateUrl: "pages/contact.html"
           
        })
});