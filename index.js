const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const questions = [    
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "color",
      message: "Do you like green, blue, pink, or red? (Choose One)"
    }
  
];
function promptUser() {
  return inquirer.prompt(questions);
};
promptUser()


function writeToFile(fileName, data) {
 
}

function init() {
    
}
init();