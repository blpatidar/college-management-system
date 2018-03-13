var BaseBean = require('../bean/BaseBean');
class UserBean extends BaseBean {
    constructor() {
        super();
        const ACTIVE = 'ACTIVE';
        const INACTIVE = 'INACTIVE';
        this.firstName = '';
        this.lastName = '';
        this.login = '';
        this.password = '';
        this.confirmPassword = '';
        this.dob = '';
        this.mobileNo = '';
        this.roleId = '';
        this.unSuccessfulLogin = 0;
        this.gender = '';
        this.lastLogin = '';
        this.lock = '';
        this.registredIP = '';
        this.lastLoginIP = '';
    };

}
module.exports = UserBean;