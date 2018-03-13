var BaseBean = require('../bean/BaseBean');
class RoleBean extends BaseBean {
    constructor() {
        super();
        const ADMIN = 'ADMIN';
        const STUDENT = 'STUDENT';
        const COLLEGE_SCHOOL = 'COLLEGE_STUDENT';
        const KIOSK = 'KIOSK';
        this.name = '';
        this.description = '';
    }
}
module.exports = RoleBean;