var Datasource = require('../model/Datasource');
var UserBean = require('../bean/UserBean');

Datasource = new Datasource();
UserBean = new UserBean();

class UserModel {
    add(UserBean) {
        return new Promise((resolve, reject) => {

            var sql = "INSERT INTO st_users (firstName,lastName,login,password,confirmPassword,dob,mobileNo,roleId,unSuccessfulLogin,gender) VALUES ('" + UserBean.firstName + "','" + UserBean.lastName + "','" + UserBean.login + "','" + UserBean.password + "','" + UserBean.confirmPassword + "','" + UserBean.dob + "','" + UserBean.mobileNo + "','" + UserBean.roleId + "','" + UserBean.unSuccessfulLogin + "','" + UserBean.gender + "')";
            Datasource.executeInsert(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });


    }
    delete(UserBean) {
        return new Promise((resolve, reject) => {
            var where = { id: UserBean.id }
            var sql = "DELETE FROM st_users WHERE ?";
            Datasource.executeDelete(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });


    };
    search(UserBean) {
        return new Promise((resolve, reject) => {

            var where = { firstName: UserBean.firstName };
            var sql = "SELECT * FROM st_users WHERE ?";
            Datasource.executeSearch(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });


    };
    update(UserBean) {
        return new Promise((resolve, reject) => {
            var set = { firstName: UserBean.firstName, lastName: UserBean.lastName, login: UserBean.login, password: UserBean.password, confirmPassword: UserBean.confirmPassword, dob: UserBean.dob, mobileNo: UserBean.mobileNo, roleId: UserBean.roleId, gender: UserBean.gender };
            var where = { id: UserBean.id }
            var sql = "UPDATE st_users SET ? WHERE ?"
            Datasource.executeUpdate(sql, set, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });


    };
    list() {
        return new Promise((resolve, reject) => {
            var sql = "SELECT * , DATE_FORMAT(dob, '%d-%m-%Y') AS BirthDate FROM st_users"
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    };
    authenticate(login, password) {
      
        return new Promise((resolve, reject) => {
            var sql = "SELECT * FROM st_users where login='" + login + "' and password= '" + password + "'"
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    };
    userAuthenticate(login) {
      
        return new Promise((resolve, reject) => {
            var sql = "SELECT * FROM st_users where login='" + login + "'";
            console.log(sql);
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    };
}
module.exports = UserModel;