// // TODO: Include packages needed for this application\

// const inquirer = require('inquirer')

// // TODO: Create an array of questions for user input
// const questions = [
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// Packages needed for the application
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');
const fs = require('fs');

// application questions
const questions = [

  {
    type: 'input',
    name: 'title',
    message: 'Please enter the title of your project: ',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Enter a title name to continue!');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project: ',
    validate: descriptRequire => {
      if (descriptRequire) {
        return true;
      } else {
        console.log('Enter a description of your project to continue');
        return false;
      }
    }
  },

  // {
  //   type: 'input',
  //   name: 'install',
  //   message: 'Please enter any installation instructions' 
  // },

  {
    type: 'input',
    name: 'clone',
    message: 'Please enter your repository link for cloning project: '
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please enter any usage information you may have: '
  },

  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution information: '
  },

  {
    type: 'checkbox',
    name: 'license',
    message: 'Select which license you would like to use from the following list: ',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'MIT', 'Apache', 'Boost', 'Unlicense']
  },

  {
    type: 'input',
    name: 'test',
    message: 'Please enter any testing info: '
  },

  {
    type: 'input',
    name: 'github',
    message: 'Please enter your gitHub username: '
  },

  {
    type: 'input',
    name: 'email',
    message: 'Please enter your eMail: '
  }

];

// Run Query Function
function runQuery() {
  return inquirer.prompt(questions)
  .then((data) => {
      const mark = markDown.generateReadMe(data)
      fs.writeFile('README.md', mark, function(err) {
        if (err) {
          console.log('Could not save file', err)
        } else {
          console.log('Successfully wrote README.md file in root directory')
        }
      })
    })

    .catch((error) => {
      console.log(error)
    })
};

runQuery();