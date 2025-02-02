// importing path, inquirer and fs
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import generateMarkdown from './generateMarkdown.js';

// setup_dirname for Es modules

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

// inquirer is collecting input for the README by asking target specific questions,

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
        type: 'input',
        name: 'Table of Contents',
        message: ' Please provide a table of contents for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'filePath',
        message: 'Please enter the path of the asset file you want to submit:',
    },
    {
        type: 'input',
        name: 'License',
        message: 'Please provide all if any liceses associated with the project:',
    },
    {   type: 'input',
        name: 'Credits',
        message: 'List your Collaborators, if any, with links to their GitHub profiles.'

    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Provide examples on how to test the application:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'what is your Github Profile',
    },
];

const data = {
  title: "My Project",
  Description: "This is a description.",
  installation: "Run `npm install`.",
  Usage: "Run `node app.js`.",
  license: "MIT",
  Credits: "John Doe, Jane Smith",
  Tests: "Run `npm test`.",
  email: "example@example.com",
  Github: "https://github.com/example"
};

const markdownContent = generateMarkdown(data);

console.log(markdownContent);
 // Create a function to initialize app
    
 function init() {
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);
        
        // Writing content into the README file
        fs.writeFile('README.md', content, (err) =>
            err ? console.error("Error creating README.md:", err) : console.log("README.md created!")
        );
    // Handle asset file
        const filePath = answers.filePath;
        const assetsDir = path.join(__dirname, "assets");
        
        if (!fs.existsSync(assetsDir)) {
            fs.mkdirSync(assetsDir);
        }
        if (fs.existsSync(filePath)) {  
            const destPath = path.join(assetsDir, path.basename(filePath)); 
            console.log(`File found: ${filePath}`);
            fs.copyFileSync(filePath, destPath);
            console.log(`File copied to: ${destPath}`);
        } else {
            console.log(`File not found: ${filePath}`);
        }
    });
 }

// Function call to initialize app
init();