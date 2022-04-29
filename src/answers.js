const inquirer = require("inquirer");
const Manager = require("../lib_classes/Manager");
const Engineer = require("../lib_classes/Engineer");
const Intern = require("../lib_classes/Intern");




const mangerQuestions = () => {

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your ID',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your Email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
      },
  ])
  .then((answers) => {
    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager")
    console.log(manager)
})
}

mangerQuestions();
