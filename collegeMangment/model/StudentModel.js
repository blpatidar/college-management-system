var Datasource = require('../model/Datasource');
var StudentBean = require('../bean/StudentBean');

Datasource = new Datasource();
StudentBean = new StudentBean();

class StudentModel {
    add(StudentBean) {
        return new Promise((resolve, reject) => {

            var sql = "INSERT INTO clg_students (firstName,lastName,dob,mobileNo,email,password,confirmPassword,collegeId,collegeName) VALUES ('" + StudentBean.firstName + "','" + StudentBean.lastName + "','" + StudentBean.dob + "','" + StudentBean.mobileNo + "','" + StudentBean.email + "','" + StudentBean.password + "','" + StudentBean.confirmPassword + "','" + StudentBean.collegeId + "','" + StudentBean.collegeName + "')";
            Datasource.executeInsert(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    }
    delete(StudentBean) {
        return new Promise((resolve, reject) => {
            var where = { id: StudentBean.id }
            var sql = "DELETE FROM clg_students WHERE ?";
            Datasource.executeDelete(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });


    };
    search(StudentBean) {
        return new Promise((resolve, reject) => {
            var where = { firstName: StudentBean.firstName };
            var sql = "SELECT * FROM clg_students WHERE ?";
            Datasource.executeSearch(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });


    };
    update(StudentBean) {
        return new Promise((resolve, reject) => {

            var set = { firstName: StudentBean.firstName, lastName: StudentBean.lastName, dob: StudentBean.dob, mobileNo: StudentBean.mobileNo, email: StudentBean.email, password: StudentBean.password, confirmPassword: StudentBean.confirmPassword, collegeId: StudentBean.collegeId, collegeName: StudentBean.collegeName };
            var where = { id: StudentBean.id }
            var sql = "UPDATE clg_students SET ? WHERE ?"
            Datasource.executeUpdate(sql, set, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });


    };
    list() {
        return new Promise((resolve, reject) => {

            var sql = "SELECT * , DATE_FORMAT(dob, '%d-%m-%Y') AS BirthDate FROM clg_students"
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    };
    loginAuthenticate(email, password) {
       
        return new Promise((resolve, reject) => {
            var sql = "SELECT * FROM clg_students where email='" + email + "' and password= '" + password + "'"
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    };

    emailAuthenticate(email) {
       
        return new Promise((resolve, reject) => {
            var sql = "SELECT * FROM clg_students where email='" + email + "'";
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    };
}
module.exports = StudentModel;