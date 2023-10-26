// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain how to use your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL', 'None'],
    },
  ];
// Function to generate README content
function generateReadme(userInput) {
    return `# ${userInput.title}
  
  ## Description
  ${userInput.description}
  
  ## Installation
  ${userInput.installation}
  
  ## Usage
  ${userInput.usage}
  
  ## License
  This project is licensed under the ${userInput.license} License.
  `;
  }
// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing README.md:', err);
      } else {
        console.log('README.md has been successfully generated.');
      }
    });
  }
// Function to initialize the application
function init() {
    inquirer.prompt(questions).then((userInput) => {
      const readmeContent = generateReadme(userInput);
      writeToFile('README.md', readmeContent);
    });
  }

// Initialize the application
init();
