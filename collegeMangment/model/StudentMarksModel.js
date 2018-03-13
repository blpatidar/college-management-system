var Datasource = require('../model/Datasource');
var MarksheetBean = require('../bean/MarksheetBean');

Datasource = new Datasource();
MarksheetBean = new MarksheetBean();

class StudentMarksModel {

    list() {
        return new Promise((resolve, reject) => {

            var sql = "SELECT st_users.firstName,st_users.login, st_users.roleId, st_marksheet.rollNo,st_marksheet.`chemistry`,st_marksheet.`physics`,st_marksheet.`maths` FROM st_users JOIN st_marksheet ON st_users.roleId = st_marksheet.rollNo"
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    }
}
module.exports = StudentMarksModel;