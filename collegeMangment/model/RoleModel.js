var Datasource = require('../model/Datasource');
var RoleBean = require('../bean/RoleBean');

Datasource = new Datasource();
RoleBean = new RoleBean();

class RoleModel {
    add(RoleBean) {
        return new Promise((resolve, reject) => {
            var sql = "INSERT INTO clg_role (name,description) VALUES ('" + RoleBean.name + "','" + RoleBean.description + "')";
            Datasource.executeInsert(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
        
    }
    delete(RoleBean) {
        return new Promise((resolve, reject) => {
            var where = { id: RoleBean.id }
        var sql = "DELETE FROM clg_role WHERE ?";
        Datasource.executeDelete(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
       
    };
    search(RoleBean) {
        return new Promise((resolve,reject)=>{
            var where = { name: RoleBean.name };
            var sql = "SELECT * FROM clg_role WHERE ?";
            Datasource.executeSearch(sql, where).then(response =>{
                return resolve(response);
            }).catch(err=>{
                return reject(response);
            })
        });
        
    };
    update(RoleBean) {
        return new Promise((resolve, reject) => {
            var set = { name: RoleBean.name, description: RoleBean.description };
            var where = { id: RoleBean.id }
            var sql = "UPDATE clg_role SET ? WHERE ?"
            Datasource.executeUpdate(sql, set, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
       
    };
    list() {
        return new Promise((resolve, reject) => {
            var sql = "SELECT * FROM clg_role"
            Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
    };
}
module.exports = RoleModel;