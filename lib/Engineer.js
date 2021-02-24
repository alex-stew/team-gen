const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHubName) {
        super(name, id, email);

        this.role = "Engineer";
        this.github = gitHubName
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;