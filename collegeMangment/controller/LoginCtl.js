var UserModel = require('../model/UserModel');
var BaseCtl = require('../controller/BaseCtl');
UserModel = new UserModel();

class LoginCtl extends BaseCtl {
    populateBean(req) {
        var loginId = req.body.login;
        var password = req.body.password;
        return {
            loginId: loginId,
            password: password
        }
    }
    getModel() {

        return UserModel;
    };

}
module.exports = LoginCtl;