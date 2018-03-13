var Datasource = require('../model/Datasource');
var CollegeBean = require('../bean/CollegeBean');

Datasource = new Datasource();
CollegeBean = new CollegeBean();

class CollegeModel {
    add(CollegeBean) {
        return new Promise((resolve, reject) => {
            var sql = "INSERT INTO clg_users (name,address,state,city,phoneNo) VALUES ('" + CollegeBean.name + "','" + CollegeBean.address + "','" + CollegeBean.state + "','" + CollegeBean.city + "','" + CollegeBean.phoneNo + "')";
            Datasource.executeInsert(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });

    }
    delete(CollegeBean) {
        return new Promise((resolve, reject) => {
            var where = { id: CollegeBean.id }
        var sql = "DELETE FROM clg_users WHERE ?";
        Datasource.executeDelete(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
        
       
    };
    search(CollegeBean) {
        return new Promise((resolve, reject) => {
            var where = { name: CollegeBean.name };
            var sql = "SELECT * FROM clg_users WHERE ?";
            Datasource.executeSearch(sql, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
      
    };
    update(CollegeBean) {
        return new Promise((resolve, reject) => {
          
        var set = { name: CollegeBean.name, address: CollegeBean.address, state: CollegeBean.state, city: CollegeBean.city, phoneNo: CollegeBean.phoneNo };
        var where = { id: CollegeBean.id }
        var sql = "UPDATE clg_users SET ? WHERE ?"
        Datasource.executeUpdate(sql, set, where).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
      

    };
    list() {
        return new Promise((resolve, reject) => {
             
        var sql = "SELECT * FROM clg_users"
        Datasource.executeList(sql).then(response => {
                return resolve(response);
            }).catch(err => {
                return reject(response);
            });
        });
      
    };
}
module.exports = CollegeModel;