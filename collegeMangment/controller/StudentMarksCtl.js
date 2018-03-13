var MarksheetBean = require('../bean/MarksheetBean');
var StudentMarksModel = require('../model/StudentMarksModel');
var BaseCtl = require('../controller/BaseCtl');
StudentMarksModel = new StudentMarksModel();
MarksheetBean = new MarksheetBean();
class StudentMarksCtl extends BaseCtl {
    populateBean(req) {
        if (req.body.id != undefined) {
            MarksheetBean.id = req.body.id;
        }
        if (req.body.rollNo != undefined) {
            MarksheetBean.rollNo = req.body.rollNo
        }
        if (req.body.studentId != undefined) {
            MarksheetBean.studentId = req.body.studentId
        }
        if (req.body.name != undefined) {
            MarksheetBean.name = req.body.name;
        }
        if (req.body.physics != undefined) {
            MarksheetBean.physics = req.body.physics
        }
        if (req.body.chemistry != undefined) {
            MarksheetBean.chemistry = req.body.chemistry;
        }
        if (req.body.maths != undefined) {
            MarksheetBean.maths = req.body.maths;
        }
        return MarksheetBean;

    }
    getModel() {
        return StudentMarksModel;
    }
}
module.exports = StudentMarksCtl;