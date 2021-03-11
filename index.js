// importing local dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// importing node.js dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// pathing for the output
const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "yourTeam.html");

const render = require("./src/render");

// sets up our empty parent array to add the specific worker type data into
const employees = [];

// declares newManager function to create entries that are at management level
const newManager = () => {
    return new Promise((res, rej) => {
        inquirer.prompt([{
                message: "What is the managers name?",
                name: "name"
            },
            {
                message: "What is their ID?",
                name: "id"
            },
            {
                message: "What is their email address?",
                name: "email"
            },
            {
                message: "What is their office number?",
                name: "officeNumber"
            }
        ]).then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(manager);
            res();
        })
    })
}

// declares newEmployee function to create entries that are at employee level
const newEmployee = () => {
    return new Promise((res, rej) => {
        inquirer.prompt([{
                message: "What type of employee do you need to add next?",
                type: "list",
                name: "typeEmployee",
                choices: [
                    "Engineer",
                    "Intern",
                    {
                        name: "I have created all the employees I need to",
                        value: false
                    }
                ]
            },
            {
                message: "What is their name?",
                name: "name",
                when: ({ typeEmployee }) => typeEmployee
            },
            {
                message: "What is their ID?",
                name: "id",
                when: ({ typeEmployee }) => typeEmployee
            },
            {
                message: "What is their email address?",
                name: "email",
                when: ({ typeEmployee }) => typeEmployee
            },
            {
                message: "What is their github username?",
                name: "gitHubName",
                when: ({ typeEmployee }) => typeEmployee === "Engineer"
            },
            {
                message: "Which school are they from?",
                name: "school",
                when: ({ typeEmployee }) => typeEmployee === "Intern"
            }
        ]).then(response => {
            if (response.typeEmployee) {
                switch (response.typeEmployee) {
                    case "Engineer":
                        const engineer = new Engineer(response.name, response.id, response.email, response.gitHubName);
                        employees.push(engineer);
                        break;
                    case "Intern":
                        const intern = new Intern(response.name, response.id, response.email, response.school);
                        employees.push(intern);
                        break;
                }
                return newEmployee().then(() => res());
            } else {
                return res()
            }
        })
    })
}

const createFile = (html) => {
    if (!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir);
    }

    fs.writeFile(outputPath, html, "utf-8", (err) => {
        if (err) throw err;
        console.log(`Team generated successfully, view output in ${outputPath}`)
    });
}

newManager()
    .then(() => {
        return newEmployee()
    })
    .then(() => {
        const tempHTML = render(employees)
        createFile(tempHTML);
    }).catch((err) => {
        console.log(err);
    });