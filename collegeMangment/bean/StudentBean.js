var BaseBean = require('../bean/BaseBean');
class StudentBean extends BaseBean {
    constructor() {
        super();
        this.firstName = '';
        this.lastName = '';
        this.dob = '';
        this.mobileNo = '';
        this.email = '';
        this.password='';
        this.confirmPassword='';
        this.collegeId = '';
        this.collegeName = '';

    }
}
module.exports = StudentBean;