const Employee = require("./Employee");
const answers =require("../src/answers");


class Manager {
    constructor(name, id, email, officeNumber, role) {

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
    }

    // getRole() {
    //     return 'Manager'
    // }
}


module.exports = Manager;