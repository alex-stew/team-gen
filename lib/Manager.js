const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.role = "Manager";
        this.officeNum = officeNum
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;