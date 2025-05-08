// importing path, inquirer and fs
import inquirer from "inquirer";
import fs from "fs";
import path from "path";

import generateMarkdown from './generateMarkdown.js';

const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a short discription explaining the what,why, and how of your project',
    },
    {  
        type: "input",
        name: "technologies",
        message: "What technologies were used to create this project?",
    },
    {
        type: "input",
        name: "screenshots",
        message: "Provide the file path to the screenshots:",
    },
    {
        type: "input",
        name: "video",
        message: "Provide a link to the walkthrough video:",
    },
    {
        type: "input",
        name: "link",
        message: "Enter the URL link to your deployed application:",
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Add the names of everyone who particpated in this project:",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];
     
    //  a function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
      }

//  a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
 }

// Function call to initialize app
init();