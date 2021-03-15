module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/761f2d282b.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-danger text-light text-center">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-around">
                ${createCard(team)}
            <div>
        </div>
    </div>
    </div>
</body>
</html>
    `;
};

const createCard = team => {
    // Manager output to html
    const cardManager = manager => {
        return `
        <div class="card col-3">
                <div class="card-header bg-primary text-light text-center ">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h4 class="card-title"><i class="fas fa-mug-hot"></i>${manager.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID: ${manager.getId()} </li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: <a href="tel:${manager.getOfficeNum()}">${manager.getOfficeNum()}</a></li>
                    </ul>
                </div>
        </div>
        `;
    };

    //Engineer output to html
    const cardEngineer = engineer => {
        return `
        <div class="card col-3">
                <div class="card-header bg-primary text-light text-center ">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h4 class="card-title"><i class="fas fa-glasses"></i>${engineer.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID: ${engineer.getId()} </li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub Account: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>    
        `;
    };

    //Intern output to html
    const cardIntern = intern => {
        return `
        <div class="card col-3">
                <div class="card-header bg-primary text-light text-center ">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h4 class="card-title"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group text-dark">
                        <li class="list-group-item">ID: ${intern.getId()} </li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => cardManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => cardEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => cardIntern(intern))
        .join("")
    );

    return html.join("");
}