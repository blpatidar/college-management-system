var BaseCtl = require('../controller/BaseCtl');
var CollegeBean = require('../bean/CollegeBean');
var CollegeModel = require('../model/CollegeModel');

CollegeModel = new CollegeModel();
CollegeBean = new CollegeBean();
class CollegeCtl extends BaseCtl {
    populateBean(req) {
        if (req.body.id != undefined) {
            CollegeBean.id = req.body.id;
        }
        if (req.body.name != undefined) {
            CollegeBean.name = req.body.name
        }
        if (req.body.address != undefined) {
            CollegeBean.address = req.body.address
        }
        if (req.body.state != undefined) {
            CollegeBean.state = req.body.state;
        }
        if (req.body.city != undefined) {
            CollegeBean.city = req.body.city
        }
        if (req.body.phoneNo != undefined) {
            CollegeBean.phoneNo = req.body.phoneNo;
        }
        return CollegeBean;
    }
    getModel() {
        return CollegeModel;
    }
}
module.exports = CollegeCtl;