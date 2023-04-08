// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for the usage of your project",
    name: "usage",
  },
  {
    type: "list",
    message: "Please select a license for your application",
    name: "license",
    choices: [
      "No License",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New or Revised License",
      "Boost Softward License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License v2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public LIcense v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unilicense",
    ],
  },
  {
    type: "input",
    message:
      "Provide guidelines for how other developers can contribute to your application or package",
    name: "contributions",
  },
  {
    type: "input",
    message: "Provide examples of tests and how to run them",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var fileText = data.email;
  fs.writeFile(fileName, genMarkdown.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
