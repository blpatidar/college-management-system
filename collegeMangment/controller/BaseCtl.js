class BaseCtl {
    constructor() {

    };

    populateBean(request) {
        return null;
    };
    getModel() {
        return null;

    }

    service(request, res) {
        if (request.method == 'GET') {
            this.display(request, res);
        } else {
            this.submit(request, res);
        }
    }

    display(request, res) {
        var model = this.getModel();
        model.list().then(response => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ "success": true, "message": "Record has been display successfully.", "response": response }));
        }).catch(err => {
            console.log(err);
        });
    }

    submit(request, res) {
        var operation = request.body.operation;
        var model = this.getModel();
        var bean = this.populateBean(request);

        if (operation == "add") {

            model.add(bean).then(response => {

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ "success": true, "message": "Record has been added successfully.", "response": response }));
            }).catch(err => {
                console.log(err);
            });
        };
        if (operation == "update") {
            model.update(bean).then(response => {

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ "success": true, "message": "Record has been updated successfully.", "response": response }));
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "delete") {
            model.delete(bean).then(response => {

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ "success": true, "message": "Record has been deleted successfully.", "response": response }));
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "search") {
            model.search(bean).then(response => {

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ "success": true, "message": "Record matched", "response": response }));
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "list") {
            model.list(bean).then(response => {

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({ "success": true, "message": "Record matched", "response": response }));
            }).catch(err => {
                console.log(err);
            });
        };
        if (operation == "authenticate") {
            model.authenticate(bean.loginId, bean.password).then(response => {
                console.log(bean.loginId)
                if (response.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": true, "message": "authenticatiion successful" }));
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": false, "message": "Invalid Login or password" }));
                }
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "loginAuthenticate") {
            model.loginAuthenticate(bean.email, bean.password).then(response => {

                if (response.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": true, "message": "StaffLogin", "response": response }));

                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": false, "message": "Invalid email or password" }));
                }
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "userAuthenticate") {
            model.userAuthenticate(bean.loginId).then(response => {
               
                if (response.length > 0) {
                    console.log("in if " + response.length);
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": false, "message": "login id already taken" }));
                }
                else {
                    console.log("in else " + response.length);
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": true, "message": "login id available" }));
                }
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "emailAuthenticate") {
            model.emailAuthenticate(bean.emailId).then(response => {
                if (response.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": false, "message": "This email already registered" }));
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({ "success": true, "message": "email available" }));
                }
            }).catch(err => {
                console.log(err);
            });
        }



    };
}
module.exports = BaseCtl;