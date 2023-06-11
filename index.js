// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Importing file
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "projectTitle",
    message: "Please enter the title of your project:",
  },
  {
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    name: "installation",
    message: "Please provide the installation instructions for your project:",
  },
  {
    name: "usage",
    message: "Please describe how to use your project:",
  },
  {
    name: "contribution",
    message: "Please provide the contribution guidelines for your project:",
  },
  {
    name: "test",
    message: "Please provide the test instructions for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project:",
    choices: ["Apache-2.0", "GPL-3.0", "MIT", "Unlicense"],
  },
  {
    name: "github",
    message: "Please enter your GitHub username:",
  },
  {
    name: "email",
    message: "Please enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README Generated");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("./output/README.md", readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
