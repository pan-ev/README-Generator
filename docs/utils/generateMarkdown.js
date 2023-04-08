// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(selectedLicense) {
  return selectedLicense === "No License" ? "" : `![](https://img.shields.io/badge/license-${selectedLicense.split(" ").join("_")}-brightgreen)`;
}

// Function that returns the license link
function renderLicenseLink(selectedLicense) {
  if (selectedLicense !== "No License") {
    if (selectedLicense == "Apache License 2.0") {
      return "https://choosealicense.com/licenses/apache-2.0/"
    } else if (selectedLicense == "GNU General Public License v3.0")
    {
      return "https://choosealicense.com/licenses/gpl-3.0/"
    } else if (selectedLicense == "MIT License")
    {
      return "https://choosealicense.com/licenses/mit/"
    } else if (selectedLicense == "BSD 2-Clause Simplified License")
    {
      return "https://choosealicense.com/licenses/bsd-2-clause/"
    } else if (selectedLicense == "BSD 3-Clause New or Revised License")
    {
      return "https://choosealicense.com/licenses/bsd-3-clause/"
    } else if (selectedLicense == "Boost Softward License 1.0")
    {
      return "https://choosealicense.com/licenses/bsl-1.0/"
    } else if (selectedLicense == "Creative Commons Zero v1.0 Universal")
    {
      return "https://choosealicense.com/licenses/cc0-1.0/"
    } else if (selectedLicense == "Eclipse Public License v2.0")
    {
      return "https://choosealicense.com/licenses/epl-2.0/"
    } else if (selectedLicense == "GNU Affero General Public License v3.0")
    {
      return "https://choosealicense.com/licenses/gpl-3.0/"
    } else if (selectedLicense == "GNU General Public LIcense v2.0")
    {
      return "https://choosealicense.com/licenses/gpl-2.0/"
    } else if (selectedLicense == "GNU Lesser General Public License v2.1")
    {
      return "https://choosealicense.com/licenses/lgpl-2.1/"
    } else if (selectedLicense == "Mozilla Public License 2.0")
    {
      return "https://choosealicense.com/licenses/mpl-2.0/"
    }
  } else {
    return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(selectedLicense) {
  return selectedLicense === "No License" ? "" : `This application is covered under ${selectedLicense}`;
}


// Function to generate markdown for README
function generateMarkdown(data, badge, link, licenseSection) {
  return `# ${data.title}
${badge}

## Description

${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseSection}  
    
${link}


## Contributing

${data.contributions}

## Tests

${data.tests}

## Questions

[${data.username}](https://github.com/pan-ev)   
   

For any additional questions, please contact me at ${data.email}
`
}

module.exports = {
  generateMarkdown,
  renderLicenseSection,
  renderLicenseBadge,
  renderLicenseLink,
}
