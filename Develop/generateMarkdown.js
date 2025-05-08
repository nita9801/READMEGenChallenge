// a function to create the License badge

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
      ' ',
      '_'
    )}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return '\n* [License](#license)\n';
  }
  return '';
}
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}
// creates the function to generate markdown Readme
function generateMarkdown(data) {
  return `# ${data.Title}

${renderLicenseBadge(data.license)}

## Description
${data.Description}
      
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Screenshots](#screenshots)
  - [Walkthrough Video](#walkthrough-video)
  - [Contributing](#contributing)
  - [Contributors](#contributors)
  - [Tests](#tests)
  -[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}

## Technologies
${data.technologies}

## Screenshots
${data.screenshots}
  
## Walkthrough Video
${data.video}
  
## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
  If you have any additonal questions, you can contact me at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
  `;
}

export default generateMarkdown;
