var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ors_database'
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("MySql server now connected");
});

class Datasource {

    executeDelete(sql, where) {
        return new Promise((resolve, reject) => {
            conn.query(sql, [where], function (err, result) {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve(result);
                }

            });
        });
    }

    executeInsert(sql) {
        return new Promise((resolve, reject) => {
            conn.query(sql, function (err, result) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
                console.log(result);
            });
        });
    }

    executeUpdate(sql, set, where) {
        return new Promise((resolve, reject) => {
            conn.query(sql, [set, where], function (err, result) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
                console.log(result);
            });
        })
    }

    executeSearch(sql, where) {
        return new Promise((resolve, reject) => {
            conn.query(sql, [where], function (err, result) {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve(result);
                }

            });
        });
    }

    executeList(sql) {
        return new Promise((resolve, reject) => {
            conn.query(sql,function (err, result) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }

            });
        });
    }
}
module.exports = Datasource;
