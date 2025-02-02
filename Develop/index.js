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
const licenses = [
    'MIT',
    'Apache 2.0',
    'GPL 3.0',
    'None'
];

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
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: licenses,
    },
    {   
        type: 'input',
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

const markdownContent = generateMarkdown(data);

console.log(markdownContent);
 // Create a function to initialize app
    
 function init() {
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);
        console.log(`Selected License: ${answers.license}`);
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