var Datasource = require('../model/Datasource');
var MarksheetBean = require('../bean/MarksheetBean');

Datasource = new Datasource();
MarksheetBean = new MarksheetBean();

class MarksheetModel {
    add(MarksheetBean) {
        return new Promise((resolve, reject) => {
            var sql = "INSERT INTO st_marksheet (rollNo,studentId,name,physics,chemistry,maths) VALUES ('" + MarksheetBean.rollNo + "','" + MarksheetBean.studentId + "','" + MarksheetBean.name + "','" + MarksheetBean.physics + "','" + MarksheetBean.chemistry + "','" + MarksheetBean.maths + "')";
            Datasource.executeInsert(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    }
    delete(MarksheetBean) {
        return new Promise((resolve, reject) => {

            var where = { id: MarksheetBean.id }
            var sql = "DELETE FROM st_marksheet WHERE ?";
            Datasource.executeDelete(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    };
    search(Marksheetbean) {
        return new Promise((resolve, reject) => {
            var where = { rollNo: MarksheetBean.rollNo };
            var sql = "SELECT * FROM st_marksheet WHERE ?";
            Datasource.executeSearch(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    };
    update(MarksheetBean) {
        return new Promise((resolve, reject) => {

            var set = { rollNo: MarksheetBean.rollNo, studentId: MarksheetBean.studentId, name: MarksheetBean.name, maths: MarksheetBean.maths, chemistry: MarksheetBean.chemistry, physics: MarksheetBean.physics };
            var where = { id: MarksheetBean.id }
            var sql = "UPDATE st_marksheet SET ? WHERE ?"
            Datasource.executeUpdate(sql, set, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    };
    list() {
        return new Promise((resolve, reject) => {

            var sql = "SELECT * FROM st_marksheet"
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    };
    getmarks(){
        return new Promise((resolve, reject) => {

            var sql = "SELECT st_users.firstName, st_users.roleId, st_marksheet.rollNo,st_marksheet.`chemistry`,st_marksheet.`physics`,st_marksheet.`maths` FROM st_users JOIN st_marksheet ON st_users.roleId = st_marksheet.rollNo"
            console.log(sql);
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    }
}
module.exports = MarksheetModel;