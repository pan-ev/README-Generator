// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license === "No License" ? "" : "link";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license === "No License" ? "" : "link";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license === "No License" ? "" : "link";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![](https://img.shields.io/badge/license-${data.license.split(" ").join("_")}-brightgreen)

## Description

${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

${data.Installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributions}

## Tests

${data.tests}

## Questions

${data.username} - https://github.com/pan-ev   
${data.email}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseSection,
  renderLicenseBadge,
  renderLicenseLink,
};
