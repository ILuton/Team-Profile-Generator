const inquirer = require("inquirer");
const Manager = require("../lib_classes/Manager");
const Engineer = require("../lib_classes/Engineer");
const Intern = require("../lib_classes/Intern");
// const test = document.querySelector(".main")


const  teamArray = [];

const fs = require("fs");


const managerQuestions = () => {
  
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the manager name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the manager ID',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the manager Email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is the manager office number?',
        name: 'officeNumber',
      },
  ])
  .then((answers) => {
    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager");

    let test = `<div class="employeeContainer">
    <div class="names">
      <h1>${answers.name}</h1>
      <div class="role">
        <i class="fa-solid fa-crown"></i>
        <h2>Manager</h2>
      </div>
    </div>
    <div class="info">
        <ul>
            <li>ID: ${answers.id}</li>
            <li>Email: <a href=mailto:"${answers.email}">${answers.email}</li></a>
            <li>Office Number: ${answers.officeNumber}</li>
        </ul>
    </div>
  </div>
  ` 

    fs.appendFile('index.html', test, function (err) {
      if (err) throw err;
      console.log('Saved!');
      teamArray.push(manager);
      addOrQuit();
        
  })
    
});
};


const addOrQuit = () => {


  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Do you want to add another teammate or generate?',
      choices: ["Add Engineer",  "Add Intern", "Generate Report"],
      name: 'choice',
    }
  ])
  .then((answers) => {

    if(answers.choice === "Add Engineer") {
      engineerQuestions();
    } else if (answers.choice === "Add Intern") {
      internQuestions();
    } else{
      console.log("Your Team report has been Generated!")
      console.log(teamArray);

      let end =  `</main>
      </body>
    </html>`

      fs.appendFile("index.html", end, function(err) {
        if (err) throw err;
        console.log("end added");
      })
  }
})
};


const engineerQuestions = () => {

  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is their name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their ID',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their Email?',
        name: 'email',
      },
      {
          type: 'input',
          message: 'What is their Github profile?',
          name: 'github',
        },
    ])
    .then((answers) => {
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github, "Engineer")
      

      let engineerAdd = `<div class="employeeContainer">
    <div class="names">
      <h1>${answers.name}</h1>
      <div class="role">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <h2>Engineer</h2>
      </div>
    </div>
    <div class="info">
        <ul>
            <li>ID: ${answers.id}</li>
            <li>Email: <a href=mailto:"${answers.email}">${answers.email}</li></a>
            <li>Github: <a href="${answers.github}">${answers.github}</a></li>
        </ul>
    </div>
  </div>
  ` 

    fs.appendFile('index.html', engineerAdd, function (err) {
      if (err) throw err;
      console.log('engineer added');
      teamArray.push(engineer);
      addOrQuit();
    })

    })

};



const internQuestions = () => {

  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is their name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their ID',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their Email?',
        name: 'email',
      },
      {
          type: 'input',
          message: 'What is their School?',
          name: 'school',
        },
    ])
    .then((answers) => {
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school, "Intern")

      let internAdd = `<div class="employeeContainer">
      <div class="names">
        <h1>${answers.name}</h1>
        <div class="role">
          <i class="fa-solid fa-graduation-cap"></i>
          <h2>Intern</h2>
        </div>
      </div>
      <div class="info">
          <ul>
              <li>ID: ${answers.id}</li>
              <li>Email: <a href=mailto:"${answers.email}">${answers.email}</li></a>
              <li>School: ${answers.school}</li>
          </ul>
      </div>
    </div>
    ` 
  
      fs.appendFile('index.html', internAdd, function (err) {
        if (err) throw err;
        console.log('Saved!');
        teamArray.push(intern);
        addOrQuit();
      })

  })
  };


const init = () => {

  let intro = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css">
      <script src="https://kit.fontawesome.com/24eb628edf.js" crossorigin="anonymous"></script>
      <title>My Team</title>
    </head>
    <body>
      <header class="header">
        <h1>My Team</h1>
      </header>
      <main>
      `

      fs.appendFile("index.html", intro, function(err) {
        if (err) throw err;
        console.log("intro added");
        managerQuestions();
      })
}

init();