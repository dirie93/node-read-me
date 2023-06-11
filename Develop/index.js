// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Importing file
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

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
function init() {}

// Function call to initialize app
init();
