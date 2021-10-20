// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");

    const promptUser = () => {
        return inquirer.prompt([{
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of your project: "
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
},
{
    type: "input",
    name: "usage",
    message: "What is this project usage for?"
},
{
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ]
},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "tests",
    message: "Is there a test included?"
},
{
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}
]);
};
promptUser().then(answers => console.log(answers));
  
  init();  