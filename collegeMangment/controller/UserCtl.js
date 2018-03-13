var UserBean = require('../bean/UserBean');
var UserModel = require('../model/UserModel');
var BaseCtl = require('../controller/BaseCtl');
UserModel = new UserModel();
UserBean = new UserBean();
class UserCtl extends BaseCtl{
    populateBean(req) {
             if (req.body.id != undefined) {
            UserBean.id = req.body.id;
        }
        if (req.body.firstName != undefined) {
            UserBean.firstName = req.body.firstName
        }
        if (req.body.lastName != undefined) {
            UserBean.lastName = req.body.lastName
        }
        if (req.body.login != undefined) {
            UserBean.login = req.body.login
        }
        if (req.body.password != undefined) {
            UserBean.password = req.body.password
        }
        if (req.body.confirmPassword != undefined) {
            UserBean.confirmPassword = req.body.confirmPassword
        }
        if (req.body.dob != undefined) {
            UserBean.dob = req.body.dob
        }
        if (req.body.mobileNo != undefined) {
            UserBean.mobileNo = req.body.mobileNo
        }
        if (req.body.roleId != undefined) {
            UserBean.roleId = req.body.roleId
        }
        if (req.body.unSuccessfulLogin != undefined) {
            UserBean.unSuccessfulLogin = req.body.unSuccessfulLogin
        }
        if (req.body.gender != undefined) {
            UserBean.gender = req.body.gender
        }
        if (req.body.lock != undefined) {
            UserBean.lock = req.body.lock
        }
        if (req.body.lastLogin != undefined) {
            UserBean.lastLogin = req.body.lastLogin
        }
        if (req.body.registredIP != undefined) {
            UserBean.registredIP = req.body.registredIP;
        }
        if (req.body.lastLoginIP != undefined) {
            UserBean.lastLoginIP = req.body.lastLoginIP
        }

        if (req.body.createdBy != undefined) {
            UserBean.createdBy = req.body.createdBy
        }

        if (req.body.modifiedBy != undefined) {
            UserBean.modifiedBy = req.body.modifiedBy
        }

  return UserBean;
    }
    getModel(){
  return UserModel;
    }
}

module.exports = UserCtl;