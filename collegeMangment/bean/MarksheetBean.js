var BaseBean = require('../bean/BaseBean');
class MarksheetBean extends BaseBean {
    constructor() {
        super();
        this.rollNo = '';
        this.studentId = '';
        this.name = '';
        this.physics = 0;
        this.chemistry = 0;
        this.maths = 0;

    };
}
module.exports = MarksheetBean;