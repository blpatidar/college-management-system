var express = require('express');
var app = express();
var cors = require('cors');
var http_IP = "127.0.0.1";
var http_port = '3000';
var http = require('http');
var bodyParser = require('body-parser');
var RoleCtl = require("./controller/RoleCtl");
var StudentCtl = require("./controller/StudentCtl");
var MarksheetCtl = require("./controller/MarksheetCtl");
var CollegeCtl = require("./controller/CollegeCtl");
var UserCtl = require("./controller/UserCtl");
var LoginCtl = require("./controller/LoginCtl")
var UserauthCtl = require("./controller/UserauthCtl")
var EmailauthCtl = require("./controller/EmailauthCtl")
var StaffLoginCtl = require("./controller/StaffLoginCtl") 
var StudentMarksCtl = require("./controller/StudentMarksCtl") 

RoleCtl = new RoleCtl();
UserCtl = new UserCtl();
StudentCtl = new StudentCtl();
MarksheetCtl = new MarksheetCtl();
CollegeCtl = new CollegeCtl();
LoginCtl = new LoginCtl();
UserauthCtl = new UserauthCtl();
EmailauthCtl = new EmailauthCtl();
StaffLoginCtl = new StaffLoginCtl();
StudentMarksCtl = new StudentMarksCtl();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static('./AngularJS'));//angular and node on same port
app.all("/User", function (req, res) {
    UserCtl.service(req, res);
});
app.all("/Role", function (req, res) {
    RoleCtl.service(req, res);
    
});
app.all("/Marksheet", function (req, res) {
    MarksheetCtl.service(req, res);
});
app.all("/StudentMarks", function (req, res) {
    StudentMarksCtl.service(req, res);
});
app.all("/College", function (req, res) {
    CollegeCtl.service(req, res);
});
app.all("/Student", function (req, res) {
    StudentCtl.service(req, res);
});
app.all("/Login", function (req, res) {
    LoginCtl.service(req, res);
});
app.all("/StaffLogin", function (req, res) {
    StaffLoginCtl.service(req, res);
});
app.all("/Userauth", function (req, res) {
    UserauthCtl.service(req, res);
});
app.all("/Emailauth", function (req, res) {
    EmailauthCtl.service(req, res);
});

app.listen(http_port, http_IP);
console.log("server Running on port 3000");
