var BaseBean = require('../bean/BaseBean');

class CollegeBean extends BaseBean {
    constructor() {
        super();
        this.name = '';
        this.address = '';
        this.state = '';
        this.city = '';
        this.phoneNo = '';
    };

}

module.exports = CollegeBean;