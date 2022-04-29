const inquirer = require("inquirer");
const Manager = require("../lib_classes/Manager");
const Engineer = require("../lib_classes/Engineer");
const Intern = require("../lib_classes/Intern");




const mangerQuestions = () => {

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
    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager")
    console.log(manager)
    addOrQuit();
})
}

mangerQuestions();

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
      console.log("generate")
    }
})
}


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
      console.log(engineer)
      addOrQuit();
  })
  }


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
      console.log(intern)
      addOrQuit();
  })
  }
