// a function to create the License badge

function renderLicenseBadge(license) {
  if (!license || license === 'None'){
    return '';
  } 
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `- [License](#license)`
}
// Function to generate markdown for README
function renderLicenseSection(license) {
  if (license === 'None');
  return `## License
  
  This project is licensed under the ${license} license.`
}
function generateMarkdown(data) {
  return `# ${data.Title}

      ${renderLicenseBadge(data.License)}
       ## Description
          ${data.Description}
      
       ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Technologies](#technologies)
        - [Screenshots](#screenshots)
        - [Walkthrough Video](#walkthrough-video)
        - [URL Link](#url-link)
        - [Contributing](#contributing)
        - [Contributors](#contributors)
        - [Tests](#tests)
        ${renderLicenseLink(data.license)}
        -[Questions](#questions)

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Technologies
        ${data.technologies}

        ## Screenshots
        ${data.screenshots}
  
        ## Walkthrough Video
        ${data.video}

        ## URL Link
        ${data.link}
  
        ## Contributing
        ${data.contributing}

        ## Contributors
        ${data.contributors}

        ## Tests
        ${data.tests}

        ${renderLicenseSection(data.license)}

        ## Questions
        If you have any additonal questions, you can contact me at:
        - GitHub: [${data.github}](https://github.com/${data.github})
        - Email: [${data.email}](mailto:${data.email})
      `;
    }

    export default generateMarkdown;
