// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return `![MIT](https://img.shields.io/badge/MIT-MIT%20License-ff69b4)`
    case "Creative Commons Zero v1.0 Universal":
      return `![Creative Commons](https://img.shields.io/badge/Creative%20Commons-Creative%20Commons%20Zero%20v1.0%20Universal-blueviolet)`
    case "GNU General Public License v3.0":
      return `![GNU License](https://img.shields.io/badge/GNU-General%20Public%20License%20v3.0-brightgreen)`
    case "Apache License 2.0":
      return `![Apache License](https://img.shields.io/badge/Apache-Apache%20License%202.0-9cf)`
    default:
      return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return `[MIT](https://www.mit.edu/~amini/LICENSE.md)`
    case "Creative Commons Zero v1.0 Universal":
      return `[Creative Commons](https://creativecommons.org/publicdomain/zero/1.0/legalcode)`
    case "GNU General Public License v3.0":
      return `[GNU License](https://www.gnu.org/licenses/gpl-3.0.en.html)`
    case "Apache License 2.0":
      return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`
    default:
      return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `I utilized the ${license} for this project. ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}

  ##Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)

  ##Installation
  ${data.installation}

  ##Usage 
  ${data.usage}

  ##Credits
  ${data.credits}

  ##License
  ${renderLicenseSection(data.license)}

  ##How to Contribute 
  ${data.contribution}

  ##Tests
  ${data.tests}

  ##Questions
  [Here is the link to my GitHub Profile](https://github.com/${data.username})
  If you have any questions, email me at ${data.email}

`;
}

module.exports = generateMarkdown;