const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, school, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = role;
    }

    getSchool() {

    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;