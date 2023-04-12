// Function that returns a license badge based on which license is passed in
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

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`
    case "Creative Commons Zero v1.0 Universal":
      return `[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/legalcode)`
    case "GNU General Public License v3.0":
      return `[GNU General Public License v3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`
    case "Apache License 2.0":
      return `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)`
    default:
      return ``
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  return `${renderLicenseLink(license)}`

}

// Function to generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
## Description 
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}

## How to Contribute 
${data.contribution}

## Tests
${data.tests}

## Questions
[Here is the link to my GitHub Profile](https://github.com/${data.username})
If you have any questions, email me at ${data.email}

`;
}

module.exports = generateMarkdown;