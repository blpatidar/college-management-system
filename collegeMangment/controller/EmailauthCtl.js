var StudentModel = require('../model/StudentModel');
var BaseCtl = require('../controller/BaseCtl');
StudentModel = new StudentModel();

class EmailauthCtl extends BaseCtl {
    populateBean(req) {

        var emailId = req.body.email;
        return {
            emailId: emailId
        }
    }
    getModel() {

        return StudentModel;
    };

}
module.exports = EmailauthCtl;