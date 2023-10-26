// Function to return a license badge based on the license passed in 
function renderLicenseBadge(license) {
  if (license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
  }
  return ''; // Return an empty string if there's no license
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license) {
    if (license === 'MIT') {
      return '[MIT License](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    }
  }
  return ''; // Return an empty string if there's no license
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  return ''; // Return an empty string if there's no license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
