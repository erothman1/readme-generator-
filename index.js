const inquirer = require("inquirer")
const fs = require("fs")
const markdownFile = require("./utils/generateMarkdown")

inquirer.prompt([
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


function writeToFile(fileName, data) {
    const generatedReadMe = markdownFile(data)
   
    fs.writeFile(fileName, generatedReadMe, (err) =>
        err ? console.error(err) : console.log("Success")
    )
}

