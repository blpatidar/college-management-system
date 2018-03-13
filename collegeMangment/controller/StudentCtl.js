var StudentBean = require('../bean/StudentBean');
var StudentModel = require('../model/StudentModel');
var BaseCtl = require('../controller/BaseCtl');

StudentModel = new StudentModel();
StudentBean = new StudentBean();
class StudentCtl extends BaseCtl {
    populateBean(req) {
        if (req.body.id != undefined) {
            StudentBean.id = req.body.id;
        }
        if (req.body.firstName != undefined) {
            StudentBean.firstName = req.body.firstName
        }
        if (req.body.lastName != undefined) {
            StudentBean.lastName = req.body.lastName
        }
        if (req.body.dob != undefined) {
            StudentBean.dob = req.body.dob
        }
        if (req.body.mobileNo != undefined) {
            StudentBean.mobileNo = req.body.mobileNo
        }
        if (req.body.email != undefined) {
            StudentBean.email = req.body.email
        }
        if (req.body.password != undefined) {
            StudentBean.password = req.body.password
        }
        if (req.body.confirmPassword != undefined) {
            StudentBean.confirmPassword = req.body.confirmPassword
        }
        if (req.body.collegeId != undefined) {
            StudentBean.collegeId = req.body.collegeId
        }
        if (req.body.collegeName != undefined) {
            StudentBean.collegeName = req.body.collegeName
        }

        return StudentBean;
    }
    getModel() {
        return StudentModel;
    }
}

module.exports = StudentCtl;