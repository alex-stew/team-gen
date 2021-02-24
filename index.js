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
const ouitputPath = path.join(output_dir, "team.html");

// sets up our empty parent array to add the specific worker type data into
const employees = [];

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