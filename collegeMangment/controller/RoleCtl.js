var RoleBean = require('../bean/RoleBean');
var RoleModel = require('../model/RoleModel');
var BaseCtl = require('../controller/BaseCtl');

RoleModel = new RoleModel();
RoleBean = new RoleBean();
class RoleCtl extends BaseCtl {

    populateBean(req) {
        if (req.body.id != undefined) {
            RoleBean.id = req.body.id;
        }
        if (req.body.name != undefined) {
            RoleBean.name = req.body.name
        }
        if (req.body.description != undefined) {
            RoleBean.description = req.body.description
        }

        return RoleBean;
    };
    getModel() {
        return RoleModel;
    };

}


module.exports = RoleCtl;