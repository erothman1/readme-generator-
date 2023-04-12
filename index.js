// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter your project description",
        name: "description",
    },
    {
        type: "input",
        message: "Any installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage informtation for your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "Any collaborators or sources to mention?",
        name: "credits",
    },
    {
        type: "input",
        message: "Any contribution guidelines?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Any test instructions?",
        name: "test",
    },
    {
        type: "list",
        message: "What license does your project have?",
        choices: ["MIT License", "Creative Commons Zero v1.0 Universal", "GNU General Public License v3.0", "Apache License 2.0"],
        name: "license",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
]).then((response) =>
    writeToFile("README.md", response)
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const fileContent = markdown.generateMarkdown(data)
   
    fs.writeFile(fileName, JSON.stringify(fileContent), (err) =>
        err ? console.error(err) : console.log("Success")
    )

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
