var UserModel = require('../model/UserModel');
var BaseCtl = require('../controller/BaseCtl');
UserModel = new UserModel();

class UserauthCtl extends BaseCtl {
    populateBean(req) {
        var loginId = req.body.login;
        console.log(loginId);
        return {
            loginId: loginId
        }
    }
    getModel() {
        return UserModel;
    };

}
module.exports = UserauthCtl;