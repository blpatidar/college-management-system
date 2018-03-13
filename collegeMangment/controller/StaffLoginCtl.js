var StudentModel = require('../model/StudentModel');
var BaseCtl = require('../controller/BaseCtl');
StudentModel = new StudentModel();

class StaffLoginCtl extends BaseCtl {
    populateBean(req) {
        console.log("in loginCtl populate bean");
        var email = req.body.email;
        var password = req.body.password;
        return {
            email:email,
            password:password
        }
    }
    getModel() {
        console.log("in role getmodel");
        return StudentModel;
    };

}
module.exports = StaffLoginCtl;