const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require("../lib/Intern");

let page = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device, initial-scale=1"/>
        <title>My Team</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/"
    </head>
    <body>
        <h1 style="text-align:center; background-color: rgb(255, 255, 255); height:200px; padding-top:80px; color: white;">My Team</h1>
        <div class="container">;
    </body>
`;

function createEl(team) {
    let card = `<div class="row">`;
    for (let i = 0; i < team.length; i++) {
        if (i !== 0 && i % 3 === 0) {
            card += `</div>`;
            card += `<div class="row" style = "margin-top: 50px;"` >
        }
        if (team[i] instance of Manager) {

        }
    }
}