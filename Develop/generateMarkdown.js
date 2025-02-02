// a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';''
    } else if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if(license === 'GPL 3.0') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'; 
    } else{
      return '' 
      // If there is no license, return an empty string
    }
  }   // Function to generate markdown for README
   
function generateMarkdown(data) {
    return` 
      # ${data.Title} 
      ${renderLicenseBadge(data.License)}
        ## Table of Contents
        ${data.TableofContents}
        ## Description
          ${data.Description}
        ## Installation
          ${data.installation}
        ## Usage
          ${data.Usage}
        ## License
        This project is licensed under the ${data.license} License.
        ## Credits
          ${data.Credits}      
        ## Tests
          ${data.Tests}
        ## Questions
           For any questions, please reach out to me at ${data.email} or visit my GitHub profile: ${data.Github}`
     };
 
export default generateMarkdown;
